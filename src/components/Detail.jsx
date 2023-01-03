import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getDetailData } from '../redux/actions';
import DetailNavbar from './DetailNavber';
import Loading from './Loading';

function Detail() {
  const { details } = useSelector((state) => state.games);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (details.length <= 0) {
      dispatch(getDetailData(id));
    } else {
      const filterArr = details.filter((game) => game.id === +id);
      if (filterArr.length <= 0) {
        dispatch(getDetailData(id));
      }
    }
  }, [details, dispatch, id]);

  const newArr = details.filter((item) => item.id === +id);

  const game = newArr[0];

  const screenshots = game && game.screenshots.map((item) => (
    <img src={item.image} key={item.id} alt="screenshot" />

  ));

  return (
    <div>
      <DetailNavbar />
      {game
        ? (
          <div className="detail-page">
            <div className="detail-row">
              <div className="detail-col1">
                <h1>{game.title}</h1>
                <img src={game.thumbnail} alt="detail" />
                <a href={game.game_url} className="play" target="_blank" rel="noreferrer">
                  Play Now
                </a>
              </div>
              <div className="detail-col2">
                <h1>
                  About
                  {' '}
                  {game.title}
                </h1>
                <p>
                  {game.description}
                </p>

                <h1>Additional Information</h1>
                <hr />
                <div className="information-row">
                  <div className="information-col">
                    <span>Title</span>
                    <p>
                      {game.title}
                    </p>
                  </div>
                  <div className="information-col">
                    <span>Developer</span>
                    <p>
                      {game.developer}
                    </p>
                  </div>
                  <div className="information-col">
                    <span>Publisher</span>
                    <p>
                      {game.publisher}
                    </p>
                  </div>
                </div>

                <div className="information-row">
                  <div className="information-col">
                    <span>Release Date</span>
                    <p>
                      {game.release_date}
                    </p>
                  </div>
                  <div className="information-col">
                    <span>Genre</span>
                    <p>
                      {game.genre}
                    </p>
                  </div>
                  <div className="information-col">
                    <span>Platform</span>
                    <p>
                      {game.platform}
                    </p>
                  </div>
                </div>

                <h1>
                  {game.title}
                  {' '}
                  Screenshots
                </h1>

                <div className="screenshots">
                  {screenshots}
                </div>
                {game.minimum_system_requirements
              && (
              <div>
                <h1>
                  Minimum System Requirements (
                  {game.platform}
                  )
                </h1>
                <hr />
                <div className="system-row">
                  <div className="system-col">
                    <span>Os</span>
                    <p>
                      {game.minimum_system_requirements.os}
                    </p>
                    <span>Memory</span>
                    <p>
                      {game.minimum_system_requirements.memory}
                    </p>
                    <span>Storage</span>
                    <p>
                      {game.minimum_system_requirements.storage}
                    </p>
                  </div>
                  <div className="system-col">
                    <span>Processor</span>
                    <p>
                      {game.minimum_system_requirements.processor}
                    </p>
                    <span>Graphics</span>
                    <p>
                      {game.minimum_system_requirements.graphics}
                    </p>
                  </div>
                </div>

              </div>
              )}

              </div>
            </div>
          </div>
        )

        : <Loading /> }
    </div>

  );
}

export default Detail;
