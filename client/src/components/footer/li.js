import React from 'react';
import './footer.css';

const listItems = () => {

  const news = {
                  category: 'News',
                  link: '#'
               };

  const categories = [
                      {
                        category: 'Nation',
                        link: '#'
                      },
                      {
                        category: 'World',
                        link: '#'
                      },
                      {
                        category: 'Health',
                        link: '#'
                      }
                    ];

const listItems = categories.map((category) =>
    <li><a href={category.link} className = "aEdit2">{category.category}</a></li>
);

return (
          <ul>
              <li><a href={news.link} className = "aEdit1">{news.category}</a></li><br/>
              {listItems}
          </ul>

    )
};

export default listItems;
