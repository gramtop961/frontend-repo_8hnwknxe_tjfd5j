// Simple progress bar for skills
export default function SkillBar({ name, level }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}
