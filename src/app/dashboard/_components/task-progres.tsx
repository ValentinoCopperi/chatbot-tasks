"use client"

import { useAuth } from '@clerk/clerk-react'
import { useQuery } from 'convex/react'
import React from 'react'
import { api } from '../../../../convex/_generated/api'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const TaskProgressCard = () => {

    const { userId } = useAuth()

    const tasks = useQuery(api.tasks.getTasks, {
        userId: userId || ""
    })

    if (!tasks) return <div>No tasks found</div>

    const completedTasks = tasks.filter(t => t.isDone).length
    const completionPercentage = (completedTasks *100) /tasks.length;
    console.log(completionPercentage)

    return (
        <Card className="mb-6 shadow-lg rounded-2xl overflow-hidden">
            <div className="p-6">
                <h2 className="text-xl font-semibold  mb-4">Task Progress</h2>
                <Progress value={completionPercentage} className="h-2 bg-gray-200" />
                <p className="text-sm mt-2">
                    {completedTasks} of {tasks.length} tasks completed
                </p>
            </div>
        </Card>
    )
}

export default TaskProgressCard