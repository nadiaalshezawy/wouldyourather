export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function formatQuestion({
  question = " ",
  author = " ",
  authedUser = " ",
}) {
  // console.log("question " + { question });
  // console.log("author " + { author });
  //  if (!question && !author && !authedUser) {
  console.log("q");
  // console.log("hello " + { question });
  const { id, optionOne, optionTwo, timestamp } = question;
  const { name, avatarURL } = author;
  return {
    name,
    id,
    timestamp,
    optionOne,
    optionTwo,
    avatar: avatarURL,
  };
  //}
  // return null;
}

export function formatTweet(tweet, author, authedUser, parentTweet) {
  const { id, likes, replies, text, timestamp } = tweet;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    timestamp,
    text,
    avatar: avatarURL,
    likes: likes.length,
    replies: replies.length,
    hasLiked: likes.includes(authedUser),
    parent: !parentTweet
      ? null
      : {
          author: parentTweet.author,
          id: parentTweet.id,
        },
  };
}
