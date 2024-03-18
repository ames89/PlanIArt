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
  left: "/img/optim.jpg",
  front: "/img/optim.jpg",
  right: "/img/optim.jpg",
  back: "/img/optim.jpg",
  top: "/img/optim.jpg",
  bottom: "/img/optim.jpg",
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
                html: "<h1>Atención y PlanIArt es todo lo que necesitas</h1>",
                anchor: "bottom center",
                style: {
                  backgroundColor: "#0007",
                  color: "white",
                  fontFamily: "Helvetica, sans-serif",
                  fontSize: "20px",
                  maxWidth: "90vw",
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
                  backgroundColor: "#fffb",
                  fontFamily: "Helvetica, sans-serif",
                  fontSize: "20px",
                  maxWidth: "80vw",
                  padding: "20px",
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
