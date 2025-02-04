const ApiController = {};
const GtfsRealtimeBindings = require("gtfs-realtime-bindings");

const URL =
  "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fsubway-alerts";

ApiController.getSubwayStatus = async (req, res, next) => {
  try {
    const response = await fetch(URL);
    const buffer = await response.arrayBuffer();
    const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
      new Uint8Array(buffer)
    );

    let subwayStatus = [];

    const timeConverter = (unix) => {
      const a = new Date(unix * 1000);
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time =
        date +
        " " +
        month +
        " " +
        year +
        " " +
        (hour < 10 ? "0" + hour : hour) +
        ":" +
        (min < 10 ? "0" + min : min) +
        ":" +
        (sec < 10 ? "0" + sec : sec);
      return time;
    };

    feed.entity.forEach((a) => {
      const detail = a.alert;

      if (detail && detail.activePeriod) {
        for (let i = 0; i < detail.activePeriod.length; i++) {
          const startTime = timeConverter(detail.activePeriod[i].start);
          let endTime;

          if (detail.activePeriod[i].hasOwnProperty("end")) {
            endTime = timeConverter(detail.activePeriod[i].end);
          } else {
            endTime = "Ongoing / In Progress";
          }

          if (detail.informedEntity) {
            for (let j = 0; j < detail.informedEntity.length; j++) {
              let subwayLine;

              if (detail.informedEntity[j].hasOwnProperty("routeId")) {
                subwayLine = detail.informedEntity[j].routeId;

                if (detail.headerText && detail.headerText.translation) {
                  for (
                    let k = 0;
                    k < detail.headerText.translation.length;
                    k++
                  ) {
                    let status;
                    let alternative;

                    if (
                      detail.headerText.translation[k].hasOwnProperty("text")
                    ) {
                      status = detail.headerText.translation[k].text;
                      alternative =
                        detail.descriptionText &&
                        detail.descriptionText.translation &&
                        detail.descriptionText.translation[k]
                          ? detail.descriptionText.translation[k].text
                          : "No details available";
                    }

                    const subwayDetail = {
                      subway: subwayLine,
                      start: startTime,
                      end: endTime,
                      status: status,
                      alternative: alternative,
                    };

                    subwayStatus.push(subwayDetail);
                  }
                }
              }
            }
          }
        }
      }
    });

    res.locals.test = subwayStatus;

    return next();
  } catch (error) {
    return next({
      log: "Error found in API Controller - getSubwayStatus",
      message: error.message || "An error occurred.",
    });
  }
};

module.exports = ApiController;
