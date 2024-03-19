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
import Semana2 from "./semana-2";
import Semana3 from "./semana-3";
import Semana4 from "./semana-4";
import { Viewer } from "@photo-sphere-viewer/core";

const faces = {
  left: "/img/optim.jpg",
  front: "/img/optim.jpg",
  right: "/img/optim.jpg",
  back: "/img/optim.jpg",
  top: "/img/optim.jpg",
  bottom: "/img/optim.jpg",
};

const styles = {
  backgroundColor: "#fffb",
  fontFamily: "Helvetica, sans-serif",
  fontSize: "20px",
  maxWidth: "80vw",
  padding: "20px",
  textAlign: "center",
};

export const PhotoSphere = () => {
  const handleReady = (instance: Viewer) => {
    const markersPlugs = instance.getPlugin<MarkersPlugin>(MarkersPlugin);
    if (!markersPlugs) return;

    // instance.addEventListener("click", ({ data }) => {
    //   console.log(
    //     `${data.rightclick ? "right " : ""}clicked at yaw: ${data.yaw} pitch: ${data.pitch}`
    //   );
    // });

    markersPlugs.addEventListener("select-marker", ({ marker }) => {
      console.log("click marker", marker);
      switch (marker.id) {
        case "semana1":
          window.open(
            "https://www.spreaker.com/episode/introduccion-a-la-planificacion-automatica-en-la-manufactura--59090807",
            "_blank"
          );
      }
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
                id: "semana1",
                position: {
                  yaw: "0deg",
                  pitch: "0.45",
                },
                html: Semana1,
                anchor: "top center",
                style: styles,
              },
              {
                id: "semana2",
                position: {
                  yaw: "90deg",
                  pitch: "0.45",
                },
                html: Semana2,
                anchor: "top center",
                style: styles,
              },
              {
                id: "semana3",
                position: {
                  yaw: "180deg",
                  pitch: "0.45",
                },
                html: Semana3,
                anchor: "top center",
                style: styles,
              },
              {
                id: "semana4",
                position: {
                  yaw: "270deg",
                  pitch: "0.45",
                },
                html: Semana4,
                anchor: "top center",
                style: styles,
              },
            ],
          },
        ],
      ]}
      navbar={[
        "zoom",
        "gyroscope",
        //  "autorotate",
        {
          content: "Semana 1",
          onClick: (viewer) => {
            viewer.animate({
              speed: 700,
              yaw: "0deg",
              pitch: "0",
            });
          },
        },
        {
          content: "Semana 2",
          onClick: (viewer) => {
            viewer.animate({
              speed: 700,
              yaw: "90deg",
              pitch: "0",
            });
          },
        },
        {
          content: "Semana 3",
          onClick: (viewer) => {
            viewer.animate({
              speed: 700,
              yaw: "180deg",
              pitch: "0",
            });
          },
        },
        {
          content: "Semana 4",
          onClick: (viewer) => {
            viewer.animate({
              speed: 700,
              yaw: "270deg",
              pitch: "0",
            });
          },
        },
      ]}
      onReady={handleReady}
    />
  );
};
