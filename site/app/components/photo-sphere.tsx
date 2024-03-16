"use client";

import React from "react";
import {
  AutorotatePlugin,
  CubemapAdapter,
  GyroscopePlugin,
  MarkersPlugin,
  ReactPhotoSphereViewer,
} from "react-photo-sphere-viewer";
import Semana1 from "./semana-1";
import { Viewer } from "@photo-sphere-viewer/core";

const faces = {
  left: "/img/2.webp",
  front: "/img/2.webp",
  right: "/img/2.webp",
  back: "/img/2.webp",
  top: "/img/2.webp",
  bottom: "/img/2.webp",
};

export const PhotoSphere = () => {
  const handleReady = (instance: Viewer) => {
    const markersPlugs = instance.getPlugin<MarkersPlugin>(MarkersPlugin);
    if (!markersPlugs) return;

    instance.addEventListener("click", ({ data }) => {
      console.log(
        `${data.rightclick ? "right " : ""}clicked at yaw: ${data.yaw} pitch: ${data.pitch}`
      );
    });
  };

  return (
    <ReactPhotoSphereViewer
      src={faces as unknown as string}
      height="100%"
      width="100%"
      adapter={CubemapAdapter}
      defaultZoomLvl={0}
      plugins={[
        // AutorotatePlugin,
        GyroscopePlugin,
        [
          MarkersPlugin,
          {
            markers: [
              {
                id: "titulo",
                position: {
                  yaw: "0deg",
                  pitch: "0.5",
                },
                html: "<h1>Bienvenidos a PlanIArt</h1>",
                anchor: "bottom center",
                style: {
                  backgroundColor: "#0007",
                  color: "white",
                  fontFamily: "Helvetica, sans-serif",
                  fontSize: "20px",
                  maxWidth: "240px",
                  padding: "0 10px",
                  textAlign: "center",
                },
              },
              {
                id: "panel1",
                position: {
                  yaw: "0deg",
                  pitch: "0.45",
                },
                html: Semana1,
                anchor: "top center",
                style: {
                  maxWidth: "80vw",
                  backgroundColor: "white",
                  fontSize: "20px",
                  fontFamily: "Helvetica, sans-serif",
                  textAlign: "center",
                },
              },
            ],
          },
        ],
      ]}
      navbar={[
        "zoom",
        "gyroscope",
        //  "autorotate"
      ]}
      onReady={handleReady}
    />
  );
};
