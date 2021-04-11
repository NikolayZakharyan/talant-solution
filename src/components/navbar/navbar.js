import React, { useState, useEffect } from 'react';
import Content from './Content';

function Navbar(categoriesApi) {
  const [activeTab, setActiveTab] = useState('');

  const { categories } = categoriesApi;

  useEffect(() => {
    if (categories) setActiveTab(categories[0]);
  }, [categories]);

  return (
    <section className="section">
      <nav className="navbar">
        <header className="header">Courses</header>
        <ul className="nav-list">
          {categories &&
            categories.map((tab, i) => {
              // if (i === 0) setActiveTab(tab);
              return (
                <li
                  className={activeTab === tab ? 'active-list' : ''}
                  key={i}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              );
            })}
        </ul>
      </nav>
      <div className="content">
        <Content tab={activeTab} />
      </div>
    </section>
  );
}

export default Navbar;
