import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const TopicListComponentsArr = props.topics.map((topic) => {
    return (
      <TopicListItem
        link={topic.link}
        label={topic.title}
        key={topic.id}
        className="topic-list--item"
        />
        );
      });
      return <div className="top-nav-bar--topic-list" >{TopicListComponentsArr}</div>;
    };
    
    export default TopicList;

//SAMPLE DATA
// {
//   "id": "bo8jQKTaE0Y",
//   "slug": "wallpapers",
//   "title": "Wallpapers",
//   "description": "From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your mobile and desktop screens. Finally.",
//   "published_at": "2020-04-17T02:31:04Z",
//   "updated_at": "2020-07-06T09:12:07-04:00",
//   "total_photos": 5296,
//   "cover_photo": {
//       "id": "Dwu85P9SOIk",
//       "created_at": "2016-05-03T11:00:28-04:00",
//       "updated_at": "2016-07-10T11:00:01-05:00",
//       "color": "#6E633A",
//       "downloads": 1345,
//       "likes": 24,
//       "description": "A man drinking a coffee.",
//       "location": {
//         "city": "Montreal",
//         "country": "Canada",
//         "position": {
//           "latitude": 45.473298,
//           "longitude": -73.638488
//         }
//       },
//       "urls": {
//         "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
//         "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
//         "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
//         "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
//         "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
//       },
//       "user": {
//         "id": "QPxL2MGqfrw",
//         "updated_at": "2016-07-10T11:00:01-05:00",
//         "username": "exampleuser",
//         "name": "Joe Example",
//         "portfolio_url": "https://example.com/",
//         "bio": "Just an everyday Joe"
//       }
//     }
//   }

// TopicList.defaultProps = {
//   topics: [
//     {
//       id: 1,
//       label: "Nature",
//       link: "link placeholder",
//     },
//     {
//       id: 2,
//       label: "Food",
//       link: "link placeholder",
//     },
//     {
//       id: 3,
//       label: "People",
//       link: "link placeholder",
//     },
//     {
//       id: 4,
//       label: "Places",
//       link: "link placeholder",
//     },
//     {
//       id: 5,
//       label: "Backgrounds",
//       link: "link placeholder",
//     },
//   ],
// };
