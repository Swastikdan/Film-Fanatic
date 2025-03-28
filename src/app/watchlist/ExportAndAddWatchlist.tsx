'use client'
import React, { useState, useRef } from 'react'
import { useWatchListStore } from '@/store/watchlist-store'
import { WatchList } from '@/types/watchlist'
import { Button } from '@/components/ui/button'
import { Loader2, Upload, ArrowDownToLine } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { AuthButton } from '@/components/AuthButton'

export default function ExportAndAddWatchlist() {
  const [importLoading, setImportLoading] = useState(false)
  const [exportLoading, setExportLoading] = useState(false)
  const { watchlist, loading } = useWatchListStore() // Removed unused variables
  const fileInputRef = useRef<HTMLInputElement>(null)

  const exportWatchlist = async () => {
    try {
      setExportLoading(true)
      const dataToExport = {
        state: {
          watchlist: watchlist ?? [], // Add null check
          version: 1,
        },
      }

      const json = JSON.stringify(dataToExport, null, 2)
      const blob = new Blob([json], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `watchlist-${new Date().toISOString()}.json`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error exporting watchlist:', error)
    } finally {
      setExportLoading(false)
    }
  }

  const importWatchlist = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImportLoading(true)
    const file = event.target.files?.[0]
    if (!file) {
      setImportLoading(false)
      return
    }

    const reader = new FileReader()
    reader.onload = async (e) => {
      try {
        const content = e.target?.result as string
        const importedData = JSON.parse(content)

        const rawWatchlist = importedData.state?.watchlist || importedData
        const validatedList = Array.isArray(rawWatchlist) ? rawWatchlist : []

        useWatchListStore.setState((state) => {
          const currentWatchlist = state.watchlist ?? [] // Add null check
          const existingMap = new Map(
            currentWatchlist
              .filter((item): item is WatchList => item !== null)
              .map((item) => [item.externalId, item]),
          )

          validatedList.forEach((item: WatchList) => {
            if (!existingMap.has(item.externalId)) {
              existingMap.set(item.externalId, item)
            }
          })

          return {
            watchlist: Array.from(existingMap.values()),
          }
        })
      } catch (error) {
        console.error('Error importing watchlist:', error)
        alert('Invalid watchlist file format')
      } finally {
        setImportLoading(false)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      }
    }

    reader.onerror = () => {
      console.error('Error reading file')
      setImportLoading(false)
    }
    reader.readAsText(file)
  }

  if (loading) {
    return null
  }

  return (
    <div className="flex justify-end pt-5">
      <div className="flex gap-4">
        {(watchlist?.length ?? 0) > 0 && ( // Add null safe check
          <Button
            variant="secondary"
            disabled={exportLoading}
            onClick={exportWatchlist}
            className="gap-2"
          >
            {exportLoading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <ArrowDownToLine size={20} />
            )}
            Export
          </Button>
        )}
        <Label
          htmlFor="watchlist-import"
          role="button"
          tabIndex={0}
          aria-label="Import watchlist"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              fileInputRef.current?.click()
            }
          }}
          className={`inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ${
            importLoading ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={importWatchlist}
            accept=".json"
            className="hidden"
            id="watchlist-import"
            disabled={importLoading}
          />
          {importLoading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <Upload size={20} />
          )}
          Import
        </Label>

        <AuthButton />
      </div>
    </div>
  )
}
