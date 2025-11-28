"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit2, Trash2, ChevronDown, ChevronUp } from "lucide-react"
import { LEARNING_CATEGORIES } from "@/lib/constants/learning-content"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function ContentManagement() {
  const [categories, setCategories] = useState(LEARNING_CATEGORIES)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [newCategoryName, setNewCategoryName] = useState("")
  const [newCategoryDesc, setNewCategoryDesc] = useState("")
  const [newLessonTitle, setNewLessonTitle] = useState("")
  const [newLessonDesc, setNewLessonDesc] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory = {
        id: newCategoryName.toLowerCase().replace(/\s+/g, "-"),
        name: newCategoryName,
        description: newCategoryDesc,
        icon: "BookOpen",
        color: "primary",
        lessons: [],
      }
      setCategories([...categories, newCategory])
      setNewCategoryName("")
      setNewCategoryDesc("")
    }
  }

  const handleAddLesson = (categoryId: string) => {
    if (newLessonTitle.trim()) {
      const updatedCategories = categories.map((cat) => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            lessons: [
              ...cat.lessons,
              {
                id: newLessonTitle.toLowerCase().replace(/\s+/g, "-"),
                title: newLessonTitle,
                description: newLessonDesc,
                duration_minutes: 15,
                content: "",
              },
            ],
          }
        }
        return cat
      })
      setCategories(updatedCategories)
      setNewLessonTitle("")
      setNewLessonDesc("")
    }
  }

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter((c) => c.id !== id))
  }

  const handleDeleteLesson = (categoryId: string, lessonId: string) => {
    const updatedCategories = categories.map((cat) => {
      if (cat.id === categoryId) {
        return {
          ...cat,
          lessons: cat.lessons.filter((l) => l.id !== lessonId),
        }
      }
      return cat
    })
    setCategories(updatedCategories)
  }

  const totalLessons = categories.reduce((sum, cat) => sum + cat.lessons.length, 0)

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-xs text-muted-foreground mb-1">Total Categories</p>
            <p className="text-3xl font-bold text-primary">{categories.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-xs text-muted-foreground mb-1">Total Lessons</p>
            <p className="text-3xl font-bold text-secondary">{totalLessons}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-xs text-muted-foreground mb-1">Avg Lessons/Category</p>
            <p className="text-3xl font-bold text-accent">{Math.round(totalLessons / categories.length)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-xs text-muted-foreground mb-1">Platform Status</p>
            <p className="text-sm font-bold text-green-600">Active</p>
          </CardContent>
        </Card>
      </div>

      {/* Add Category Dialog */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Add New Learning Category</CardTitle>
            <CardDescription>Create a new learning category for users</CardDescription>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Category
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Category</DialogTitle>
                <DialogDescription>Add a new learning category to the platform</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Category Name</Label>
                  <Input
                    placeholder="e.g., Advanced DeFi"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Brief description of the category"
                    value={newCategoryDesc}
                    onChange={(e) => setNewCategoryDesc(e.target.value)}
                    rows={3}
                  />
                </div>
                <Button onClick={handleAddCategory} className="w-full">
                  Create Category
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
      </Card>

      {/* Categories List */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Categories</CardTitle>
          <CardDescription>Manage all learning categories and their lessons</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id}>
                {/* Category Header */}
                <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition">
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                    className="flex-1 flex items-center gap-3"
                  >
                    {expandedCategory === category.id ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                    <div className="text-left flex-1">
                      <h3 className="font-medium text-foreground">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.lessons.length} lessons</p>
                    </div>
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">Published</span>
                    <Button size="icon" variant="ghost">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-destructive"
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Lessons List */}
                {expandedCategory === category.id && (
                  <div className="mt-3 ml-4 pl-4 border-l-2 border-border space-y-2">
                    {category.lessons.map((lesson) => (
                      <div key={lesson.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{lesson.title}</p>
                          <p className="text-xs text-muted-foreground">{lesson.duration_minutes} min</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <Edit2 className="w-3 h-3" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 text-destructive"
                            onClick={() => handleDeleteLesson(category.id, lesson.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}

                    {/* Add Lesson */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full gap-2 mt-2 bg-transparent"
                          onClick={() => setSelectedCategoryId(category.id)}
                        >
                          <Plus className="w-4 h-4" />
                          Add Lesson
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Lesson</DialogTitle>
                          <DialogDescription>Add a new lesson to {category.name}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label>Lesson Title</Label>
                            <Input
                              placeholder="e.g., Advanced Yield Farming"
                              value={newLessonTitle}
                              onChange={(e) => setNewLessonTitle(e.target.value)}
                            />
                          </div>
                          <div>
                            <Label>Description</Label>
                            <Textarea
                              placeholder="Brief description of the lesson"
                              value={newLessonDesc}
                              onChange={(e) => setNewLessonDesc(e.target.value)}
                              rows={3}
                            />
                          </div>
                          <Button onClick={() => handleAddLesson(category.id)} className="w-full">
                            Create Lesson
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
