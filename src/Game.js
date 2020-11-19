import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

const unityBuildDirPath = process.env.PUBLIC_URL + '/GameBuild/';
const unityBuildJsonPath = unityBuildDirPath + 'WebTest.json';
const unityLoaderPath = unityBuildDirPath + 'UnityLoader.js';

const unityContent = new UnityContent(
  unityBuildJsonPath,
  unityLoaderPath, {
    adjustOnWindowResize: true
  }
);

const Game = () => {
  return (
    <div id="unity">
    <Unity unityContent={unityContent} />
    </div>
  );
}

export default Game;
