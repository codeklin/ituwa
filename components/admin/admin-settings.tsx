"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Platform Settings</CardTitle>
          <CardDescription>Configure global platform settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Platform Name</label>
            <input
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
              defaultValue="Ituwa"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Support Email</label>
            <input
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
              defaultValue="support@ituwa.com"
            />
          </div>
          <Button>Save Settings</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
          <CardDescription>Platform version and statistics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Version</span>
            <span className="font-medium text-foreground">1.0.0</span>
          </div>
          <div className="flex justify-between py-2 border-t border-border pt-2">
            <span className="text-muted-foreground">Database Status</span>
            <span className="font-medium text-primary">Connected</span>
          </div>
          <div className="flex justify-between py-2 border-t border-border pt-2">
            <span className="text-muted-foreground">Last Updated</span>
            <span className="font-medium text-foreground">Nov 27, 2024</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
