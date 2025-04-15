// pages/music-test.js
import React, { useEffect, useRef, useState } from 'react';

export default function MusicTest() {
  const iframeRef = useRef(null);
  const [videoId, setVideoId] = useState('');
  const [playing, setPlaying] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const coupleId = 1; // test couple_id

  useEffect(() => {
    fetch(`/api/getCoupleDetails?id=${coupleId}`)
      .then(res => res.json())
      .then(data => {
        const url = data?.youtube_music;
        setYoutubeUrl(url);

        const match = url?.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
          setVideoId(match[1]);
        }
      });
  }, []);

  const postMessage = (command) => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: command,
          args: [],
        }),
        '*'
      );
    }
  };

  const handlePlay = () => {
    postMessage('playVideo');
    setPlaying(true);
  };

  const handleStop = () => {
    postMessage('pauseVideo');
    setPlaying(false);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>🎵 Music Test Player</h2>
      <p>Testing YouTube audio playback from DB</p>

      {videoId && (
        <iframe
          ref={iframeRef}
          width="0"
          height="0"
          style={{ display: 'none' }}
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
          title="YouTube Music"
          frameBorder="0"
          allow="autoplay"
        />
      )}

      <div className="mt-4">
        <button
          onClick={handlePlay}
          className="btn btn-success mx-2"
          disabled={playing}
        >
          ▶️ Play
        </button>
        <button
          onClick={handleStop}
          className="btn btn-danger mx-2"
          disabled={!playing}
        >
          ⏹ Stop
        </button>
      </div>

      <p className="mt-3">
        From: <code>{youtubeUrl}</code>
      </p>
    </div>
  );
}
