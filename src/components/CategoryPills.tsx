'use client'

import { useState } from 'react'

export default function CategoryPills({ items }: { items: string[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="container-wide overflow-x-auto hide-scrollbar">
      <ul className="flex items-center gap-3 py-2 min-w-max">
        {items.map((c, i) => (
          <li key={c}>
            <a
              href="#services"
              onClick={() => setActive(i)}
              className="pill"
              data-selected={active === i ? 'true' : 'false'}
            >
              {c}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}