import * as React from "react"
import { Svg } from "./styles"
import { Link as TheLink } from '@reach/router'

export const Logo = (props) => {
  return (
    <TheLink to='/'>
      <Svg
        width={528.6}
        height={134.04}
        viewBox="-14.3 7.98 528.6 134.04"
        style={{
          background: "0 0",
        }}
        preserveAspectRatio="xMidYMid"
        {...props}
      >
        <defs>
          <linearGradient
            id="prefix__editing-gradow-gradient"
            x1={0}
            x2={1}
            y1={0.5}
            y2={0.5}
            gradientUnits="objectBoundingBox"
          >
            <stop offset={0} stopColor="#66c7d3" />
            <stop offset={1} stopColor="#f1aeb1" />
          </linearGradient>
          <filter
            id="prefix__editing-gradow-filter"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feFlood floodColor="#fffcd9" result="flood" />
            <feComposite
              operator="in"
              in2="SourceAlpha"
              in="flood"
              result="shadow"
            />
            <feOffset dx={0.9} dy={-1.5} in="SourceGraphic" result="offset-1" />
            <feOffset dx={-0.9} dy={1.5} in="shadow" result="offset-2" />
            <feMerge>
              <feMergeNode in="offset-2" />
              <feMergeNode in="offset-1" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#prefix__editing-gradow-filter)">
          <path
            d="M41.06-22.41v11q0 2.1-.53 3.77t-1.4 2.94q-.88 1.26-2.04 2.15-1.15.89-2.42 1.46-1.26.56-2.54.82-1.29.27-2.44.27H15.03v-8.13h14.66q1.62 0 2.44-.84.81-.84.81-2.44v-10.93q0-1.69-.83-2.5-.83-.82-2.42-.82h-14.6q-1.65 0-2.5.83-.84.83-.84 2.42v32.97H3.63v-32.97q0-2.09.53-3.75.53-1.65 1.42-2.92.89-1.26 2.05-2.15 1.15-.9 2.42-1.46 1.26-.56 2.56-.83 1.3-.26 2.42-.26h14.66q2.09 0 3.75.53 1.65.53 2.92 1.41 1.27.87 2.16 2.03.89 1.15 1.45 2.42.56 1.26.83 2.55.26 1.28.26 2.43zm43.28-.18q0 1.68-.59 3.64-.59 1.95-1.92 3.62-1.33 1.67-3.47 2.8-2.14 1.12-5.2 1.12H58.5v-7.72h14.66q1.65 0 2.56-1.01.91-1.02.91-2.52 0-1.59-1.02-2.5-1.02-.9-2.45-.9H58.5q-1.66 0-2.56 1.01-.91 1.02-.91 2.52v11.34q0 1.63 1.02 2.53 1.01.91 2.51.91h14.6V0H58.5q-1.69 0-3.64-.59-1.95-.6-3.63-1.93-1.67-1.32-2.79-3.46-1.13-2.15-1.13-5.21v-11.4q0-1.69.6-3.64.59-1.96 1.92-3.63t3.47-2.8q2.14-1.12 5.2-1.12h14.66q1.68 0 3.64.59 1.95.6 3.62 1.92 1.67 1.33 2.8 3.47 1.12 2.14 1.12 5.21zm36.19-11.19v8.12h-14.19V0h-8.21v-25.66H87.56v-8.12h10.57v-11.03h8.21v11.03h14.19zm36.06 0v8.12h-14.18V0h-8.22v-25.66h-10.56v-8.12h10.56v-11.03h8.22v11.03h14.18zm38.29 11.19v11.4q0 1.69-.6 3.64-.59 1.96-1.92 3.63t-3.47 2.79Q186.75 0 183.69 0h-14.66q-1.69 0-3.64-.59-1.95-.6-3.62-1.93-1.68-1.32-2.8-3.46-1.13-2.15-1.13-5.21 0-1.69.6-3.65.59-1.97 1.92-3.64 1.33-1.68 3.47-2.8 2.14-1.13 5.2-1.13h14.66v7.75h-14.66q-1.65 0-2.56 1.02-.91 1.01-.91 2.51 0 1.6 1.05 2.49 1.05.89 2.48.89h14.6q1.65 0 2.56-1 .91-1 .91-2.5v-11.34q0-1.6-.99-2.54-.98-.93-2.48-.93h-17.85v-7.72h17.85q1.69 0 3.64.59 1.95.6 3.62 1.92 1.68 1.33 2.8 3.47 1.13 2.14 1.13 5.21zm43.68.18V3.25q0 2.09-.53 3.77-.53 1.67-1.4 2.93-.88 1.27-2.04 2.16-1.15.89-2.42 1.45-1.26.57-2.56.83-1.3.27-2.45.27H212.5V6.53h14.66q1.65 0 2.47-.84.81-.85.81-2.44v-25.66q0-1.59-.81-2.42-.82-.83-2.47-.83H212.5q-1.5 0-2.37.93-.88.92-.88 2.32v11q0 1.6.84 2.44.85.84 2.47.84h14.6V0H212.5q-1.16 0-2.44-.27-1.28-.26-2.54-.82-1.27-.57-2.43-1.46-1.15-.89-2.03-2.15-.87-1.27-1.4-2.94-.53-1.67-.53-3.77v-11q0-1.15.26-2.43.27-1.29.83-2.55.56-1.27 1.45-2.42.89-1.16 2.16-2.03 1.26-.88 2.92-1.41 1.66-.53 3.75-.53h14.66q1.15 0 2.45.26 1.3.27 2.56.83 1.27.56 2.42 1.46 1.16.89 2.04 2.15.87 1.27 1.4 2.92.53 1.66.53 3.75zm37-11.37v8.12h-18.28q-1.65 0-2.5.83-.84.83-.84 2.42V0h-8.13v-22.41q0-2.09.53-3.75.54-1.65 1.43-2.92.89-1.26 2.04-2.15 1.16-.9 2.42-1.46 1.27-.56 2.57-.83 1.29-.26 2.42-.26h18.34zm37.6 11.19v11.4q0 1.69-.6 3.64-.59 1.96-1.92 3.63t-3.47 2.79Q305.03 0 301.97 0h-14.66q-1.68 0-3.64-.59-1.95-.6-3.62-1.93-1.67-1.32-2.8-3.46-1.12-2.15-1.12-5.21 0-1.69.59-3.65.59-1.97 1.92-3.64 1.33-1.68 3.47-2.8 2.14-1.13 5.2-1.13h14.66v7.75h-14.66q-1.65 0-2.56 1.02-.91 1.01-.91 2.51 0 1.6 1.05 2.49 1.05.89 2.49.89h14.59q1.66 0 2.56-1 .91-1 .91-2.5v-11.34q0-1.6-.99-2.54-.98-.93-2.48-.93h-17.84v-7.72h17.84q1.69 0 3.64.59 1.95.6 3.62 1.92 1.68 1.33 2.8 3.47 1.13 2.14 1.13 5.21zm37.09.18V0h-8.12v-22.41q0-1.59-.85-2.42-.84-.83-2.5-.83h-10.56V0h-8.13v-29.75q0-.84.32-1.58.31-.73.87-1.28t1.31-.86q.75-.31 1.6-.31h14.65q1.69 0 3.63.59 1.94.6 3.69 1.91v-2.5h11q1.15 0 2.43.26 1.29.27 2.55.83 1.27.56 2.42 1.46 1.16.89 2.03 2.15.88 1.27 1.41 2.92.53 1.66.53 3.75V0h-8.12v-22.41q0-1.59-.8-2.42-.8-.83-2.45-.83h-7.32q.41 1.5.41 3.25z"
            fill="url(#prefix__editing-gradow-gradient)"
            transform="translate(63.92 104.734)"
          />
        </g>
        <style />
      </Svg>

    </TheLink>
  )
}

export default Logo
