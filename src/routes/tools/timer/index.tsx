import { createEffect, createSignal,createMemo } from "solid-js";
import classNames from "./timer.module.css";
import NoSleep from "nosleep.js";
const alarmStates = ["idle", "running", "snooze", "buzzing"] as const;
const localStorageKeys = {
  timerSessionStartedAt: "timer-session-started-at",
  timeRemaining: "time-remaining",
};
//todo: add toast messages
function Alarm() {
  const [mins, setMins] = createSignal(0);
  const [alarmState, setAlarmState] =
    createSignal<typeof alarmStates[number]>("idle");
  let audioPlayer: HTMLAudioElement | null = null;
  let videoPlayer: HTMLVideoElement | null = null;
  let snoozes = [];
  createEffect(() => {
    alarmState() === "buzzing"
      ? audioPlayer?.play()
      : (audioPlayer?.pause(), audioPlayer && (audioPlayer.currentTime = 0));

    // alarmState() === "running" ? void 0 : videoPlayer?.pause();
  });
  let nosleep: NoSleep;
  createEffect(() => {
    nosleep = new NoSleep(); //initializing here, to avoid initializing on SSR
  });

  function startAlarm(mins: number) {
    setMins(mins);
    //clear previous alarm
    clearInterval(timer);
    if (audioPlayer) {
      audioPlayer?.pause();
      audioPlayer.currentTime = 0;
    }

    setAlarmState("running");
    //this play will keep the screen on.
    // videoPlayer?.play();
    nosleep?.enable?.();//has to be in an event listener, so not  putting in createEffect()
    
    setTimeout(() => {
      setAlarmState("buzzing");
    }, mins * 60 * 1000);

    timer = setInterval(() => {
      setMins((prev) => {
        localStorage.setItem(
          localStorageKeys.timeRemaining,
          Number(prev) - 1 + ""
        );
        if (prev <= 0) {
          console.log("reached zero");
          clearInterval(timer);
          return 0;
        }
        return Number(prev) - 1; //todo: show seconds if under minute
      });
    }, 1000 * 60);
  }
  function stopAlarm() {
    clearInterval(timer);
    setAlarmState("idle");
    setMins(0);
    nosleep?.disable();
    localStorage.removeItem(localStorageKeys.timerSessionStartedAt);
    localStorage.removeItem(localStorageKeys.timeRemaining);
  }

  const startTime = createMemo(()=> {
    if(typeof localStorage === "undefined") return ""
    const startTime = localStorage?.getItem(
      localStorageKeys.timerSessionStartedAt
    );
    if (!startTime) return "";
    const time = new Date();
    const timerTime =
      (time.getHours() + "").padStart(2, "0") +
      (time.getMinutes() + "").padStart(2, "0");
    return timerTime
  })

  function inputTime() {
    const timeRemaining = localStorage.getItem(localStorageKeys.timeRemaining);
    const value = window.prompt(
      "Enter number of minutes",
      timeRemaining || "45"
    );
    if (Number(value) < 0) {
      alert("Cannot be negative");
      return 0;
    }
    if (Number(value) > 1000) {
      alert(">1000 mins is too much");
      return 0;
    }
    if (isNaN(mins())) {
      alert("please enter a number -- " + mins());
      return 0;
    }
    return Number(value);
  }

  let timer = 0;
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        "flex-direction": "column",
      }}
    >
      <div
        style={{
          "flex-grow": 1,
          width: "100%",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          "flex-direction": "column",
        }}
      >
        <div
          class={
            classNames["circle"] +
            " " +
            (alarmState() === "running" || alarmState() === "snooze"
              ? classNames["active"]
              : "")
          }
        >
          {alarmState() === "buzzing" ? (
            <button
              style={{
                "font-size": "4rem",
                border: "none",
                "background-color": "transparent",
                "text-align": "center",
                "font-family": "inherit",
              }}
              onClick={() => {
                snoozes.push(5);
                startAlarm(5);
              }}
            >
              +5 <small>min</small>
            </button>
          ) : (
            <button
              style={{
                "font-size": "4rem",
                border: "none",
                "background-color": "transparent",
                "text-align": "center",
                "font-family": "inherit",
              }}
              onClick={() => {
                const value = inputTime();
                localStorage.setItem(
                  localStorageKeys.timerSessionStartedAt,
                  new Date().toISOString()
                );
                if (value) startAlarm(value);
              }}
            >
              {mins() || "Start"}
            </button>
          )}
        </div>

        {["running", "snooze", "buzzing"].includes(alarmState()) ? (
          <button
            class={classNames["action-btn"] + " " + classNames["stop-btn"]}
            onClick={stopAlarm}
          >
            {"Stop"}
          </button>
        ) : (
          <button
            class={classNames["action-btn"] + " " + "invisible-placeholder"}
            onClick={stopAlarm}
          >
            {"occupying space"}
          </button>
        )}
        <audio
          ref={audioPlayer as unknown as HTMLAudioElement}
          style={{ visibility: "hidden" }}
          src="/alarm-clock-music.mp3"
          loop
          autoplay={false}
        ></audio>
        {/* <video
          muted
          ref={videoPlayer as unknown as HTMLVideoElement}
          autoplay={false}
          loop
          src="/videoplayback.mp4"
          style={{ position: "fixed", right: "-1000px", width: "100px" }}
        ></video> */}
        <span style={{"position":"absolute",bottom:"0",right:"0"}}>{startTime()}</span>
      </div>
      <footer>
        Sound Effect by{" "}
        <a
          href="https://pixabay.com/users/lesiakower-25701529/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=113180"
          style={{ color: "inherit", display: "inline", margin: "0 0.5rem " }}
        >
          Lesiakower
        </a>{" "}
        from{" "}
        <a
          href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=113180"
          style={{ color: "inherit", display: "inline", margin: "0 0.5rem" }}
        >
          Pixabay
        </a>
      </footer>
    </div>
  );
}

export default Alarm;
