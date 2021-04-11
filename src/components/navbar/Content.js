import React, { useEffect, useState } from 'react';
import { toJS } from 'mobx';
import store from '../../store/Store';
import Svg from '../left-bar/Svg';

function Content({ tab }) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    blocks: { blocks },
    minutes: { minutes },
  } = toJS(store);

  useEffect(() => {
    if (blocks && minutes) setIsLoading(true);
  }, [blocks, minutes]);

  if (tab === 'Popular') {
    return (
      <>
        {isLoading && blocks ? (
          blocks.map((title, i) => {
            return (
              <article className="content-item" key={minutes[i].id}>
                <div className="content-text">
                  <div className="title">
                    <h4>{title} </h4>
                    <h6>lesson</h6>
                  </div>
                  <h4>{minutes[i].time} min</h4>
                  <Svg />
                </div>

                <img
                  src="https://t4.ftcdn.net/jpg/01/95/85/09/360_F_195850927_7bHARyOJHnvKQVwDxqbUaFBwNPguRaOO.jpg"
                  alt={'name'}
                ></img>
              </article>
            );
          })
        ) : (
          <>
            <h1>{'LOADING'}</h1>
          </>
        )}
      </>
    );
  } else {
    return <>{tab}</>;
  }
}

export default Content;
