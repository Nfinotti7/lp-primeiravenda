document.getElementById("vid_62f1614fa0149e0009ceffdb") ||
  (function (e, t, d) {
    (t = e.getElementById("scr_62f1614fa0149e0009ceffdb")),
      ((d = e.createElement("DIV")).id = "vid_62f1614fa0149e0009ceffdb"),
      (d.style.position = "relative"),
      (d.style.width = "100%"),
      (d.style.padding = "56.25% 0 0"),
      t.parentElement.insertBefore(d, t);
  })(document),
  document.getElementById("thumb_62f1614fa0149e0009ceffdb") ||
    (function (e, t, l) {
      (t = e.getElementById("vid_62f1614fa0149e0009ceffdb")),
        ((l = e.createElement("IMG")).id = "thumb_62f1614fa0149e0009ceffdb"),
        (l.style.top = 0),
        (l.style.left = 0),
        (l.style.width = "100%"),
        (l.style.height = "100%"),
        (l.style.position = "absolute"),
        (l.style.objectFit = "cover"),
        (l.src =
          "https://images.converteai.net/527641d0-c886-4980-bcdd-195cfa49ac7f/players/62f1614fa0149e0009ceffdb/thumbnail.jpg"),
        t.appendChild(l);
    })(document),
  document.getElementById("backdrop_62f1614fa0149e0009ceffdb") ||
    (function (e, t, l) {
      (t = e.getElementById("vid_62f1614fa0149e0009ceffdb")),
        ((l = e.createElement("DIV")).id = "backdrop_62f1614fa0149e0009ceffdb"),
        (l.style.top = 0),
        (l.style.left = 0),
        (l.style.width = "100%"),
        (l.style.height = "100%"),
        (l.style.position = "absolute"),
        (l.style.backdropFilter = "blur(5px)"),
        (l.style.webkitBackdropFilter = "blur(5px)"),
        t.appendChild(l);
    })(document),
  !(function (e, s, t, a, d, n, r) {
    e.smrtvds ||
      ((d = e.smrtvds =
        function () {
          d.callMethod
            ? d.callMethod.apply(d, arguments)
            : d.queue.push(arguments);
        }),
      e._smrtvds || (e._smrtvds = d),
      (d.push = d),
      (d.loaded = !0),
      (d.version = "1.1"),
      (d.queue = []),
      ((n = s.createElement("script")).async = !0),
      (n.src =
        "https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js"),
      s.getElementsByTagName("head")[0].appendChild(n));
  })(window, document),
  window.smrtvds(
    "vid_62f1614fa0149e0009ceffdb",
    "527641d0-c886-4980-bcdd-195cfa49ac7f",
    "62f16135af304f000d4e1bc5",
    {
      autoplay: "smartplay",
      smart_autoplay_template: "",
      theme: "#C53C80",
      foreground_color: "#FFFFFF",
      video: { width: 1920, height: 1080 },
      cdn: "",
      displays: {
        big_play: false,
        play_pause: false,
        backward: false,
        forward: false,
        volume: true,
        volume_bar: true,
        time: false,
        fullscreen: true,
        seekbar: false,
        seekbar_time: true,
        speed: true,
      },
      callAction: [],
      pixels: [],
      thumbs: [],
      headlines: [],
      turbos: [],
      smart_autoplay_elements: [],
      mini_hooks: false,
      mini_hooks_elements: [],
      resume: false,
      fake_bar: true,
      headline: false,
      turbo: false,
      turbo_speed: 1.0,
      turbo_auto_test: false,
      smartplay_options: {
        top_text: "Seu vídeo já começou",
        bottom_text: "Clique para ouvir",
        foreground_color: "#FFFFFF",
        background_color: "rgba(255,188,0,0.84)",
        start_at: 0,
        end_at: 609,
      },
      fake_bar_options: {
        height: 10,
        alpha: 3.0,
        vbar_height: false,
        vbar_end: false,
        vbar_network: false,
      },
    }
  );
