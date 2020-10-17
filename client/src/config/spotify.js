import SpotifyWebApi from 'spotify-web-api-js';

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const spotify_client_id = 'ff7e1ec8d7d844099f07edb9265c5235';
const redirect_uri = 'https://spotify-clone12.netlify.app';
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-library-read',
    'user-top-read',
    'user-follow-read',
    'user-modify-playback-state',
];

export const spotifyInstance = new SpotifyWebApi();

export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            // console.log('The initial: ', initial);
            // console.log('The item: ', item);

            var parts = item.split('=');
            // console.log('The parts ', parts);
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${spotify_client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`;
