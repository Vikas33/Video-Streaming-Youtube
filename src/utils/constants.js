const GOOGLE_API_KEY = 'AIzaSyD5KZ6Dj8tzaQvZtcZFYkOPAkAyO6W3FXA';
const cx = '04849f21d71764827';

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=200&regionCode=IN&key=' + GOOGLE_API_KEY;
export const YOUTUBE_COMMENTS_API = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=' + GOOGLE_API_KEY;

// export const YOUTUBE_SEARCH_API = 'https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q='
export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/customsearch/v1?cx=${cx}&key=${GOOGLE_API_KEY}&q=`;
