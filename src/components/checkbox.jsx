import React from 'react'

export function Checkbox({ id, className, ...props }) {
  return (
    <input
      type="checkbox"
      id={id}
      className={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}

