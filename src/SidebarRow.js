import React from 'react'
import './SidebarRow.css';


function SidebarRow({selected,Icon,title}) {
  return (
    <div className={`sidebar__row ${selected && "selected"}`}>
      <Icon className="sidebar__row__icons"/>
      <h2 className="sidebar__row__title">{title}</h2>
    </div>
  )
}

export default SidebarRow