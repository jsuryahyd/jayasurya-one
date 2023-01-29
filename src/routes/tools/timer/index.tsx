import { createEffect, createSignal } from "solid-js";
import classNames from "./timer.module.css";

const alarmStates = ["idle", "running", "snooze", "buzzing"] as const;

function Alarm() {
  const [mins, setMins] = createSignal(0);
  const [alarmState, setAlarmState] =
    createSignal<typeof alarmStates[number]>("idle");
  let audioPlayer: HTMLAudioElement | null = null;
  let snoozes = [];
  createEffect(() => {
    alarmState() === "buzzing"
      ? audioPlayer?.play()
      : (audioPlayer?.pause(), audioPlayer && (audioPlayer.currentTime = 0));
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
    setTimeout(() => {
      setAlarmState("buzzing");
    }, mins * 60 * 1000);

    timer = setInterval(() => {
      setMins((prev) => {
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
  }

  function inputTime() {
    const value = window.prompt("Enter number of minutes", "45");
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
            class={
              classNames["action-btn"] + " " + "invisible-placeholder"
            }
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
