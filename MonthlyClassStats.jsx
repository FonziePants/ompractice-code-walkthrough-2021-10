import { useEffect, useState } from "react"
import { useAPIContext } from "../contexts";

export const MonthlyClassStats = ({start, end, ...props}) => {
    const [monthlyData, setMonthlyData] = useState();
    const [fetchingData, setFetchingData] = useState(false);
    const [fetchingError, setFetchingError] = useState();

    const { classService } = useAPIContext();

    useEffect(() => {
        if (!monthlyData && !fetchingData && !fetchingError) {
            setFetchingData(true);

            let endDate = end || new Date();
            let startDate = start || (new Date(endDate)).setFullYear(endDate.getFullYear() - 1)

            classService.getClassesInRange(
                startDate,
                endDate
            ).then((result) => {
                let data = {};
                let eClasses = result.flatMap((c) => {
                    if (c.enrolled) { return [c]; }
                    else { return []; }
                })
                eClasses.forEach((c) => {
                    let month = new Date(c.start).getMonth();
                    let minutes = month in data ? data[month] : 0;
                    minutes += c.duration;
                    data[month] = minutes;
                })
                setMonthlyData(data)
                setFetchingData(false);
            }).catch((error) => {
                console.log(error?.data?.message)
                setFetchingError(error);
                setFetchingData(false);
            })
        }
    })

    function Months() {
        if (!!monthlyData) {
            return (
                <>
                <div className="monthly-stats__month monthly-stats__month--january">
                    <img className="monthly-stats__month__image" src="/images/january/illustration.jpg" />
                    <h2>January</h2>
                    <p>You spent {monthlyData[1]} minutes in class!</p>
                    {(monthlyData[1] > (10*60)) && (
                        <img className="monthly-stats__month__trophy" src="/images/trophies/ten-hour-award.jpg" />
                    )}
                </div>
                <div className="monthly-stats__month monthly-stats__month--february">
                    <img className="monthly-stats__month__image" src="/images/february/illustration.jpg" />
                    <h2>February</h2>
                    <p>You spent {monthlyData[2]} minutes in class!</p>
                    {(monthlyData[2] > (10*60)) && (
                        <img className="monthly-stats__month__trophy" src="/images/trophies/ten-hour-award.jpg" />
                    )}
                </div>
                <div className="monthly-stats__month monthly-stats__month--march">
                    <img className="monthly-stats__month__image" src="/images/january/illustration.jpg" />
                    <h2>March</h2>
                    <p>You spent {monthlyData[3]} minutes in class!</p>
                    {(monthlyData[3] > (10*60)) && (
                        <img className="monthly-stats__month__trophy" src="/images/trophies/ten-hour-award.jpg" />
                    )}
                </div>
                <div className="monthly-stats__month monthly-stats__month--4">
                    <img className="monthly-stats__month__image" src="/images/4/illustration.jpg" />
                    <h2>April</h2>
                    <p>You spent {monthlyData[4]} minutes in class!</p>
                    {(monthlyData[4] > (10*60)) && (
                        <img className="monthly-stats__month__trophy" src="/images/trophies/ten-hour-award.jpg" />
                    )}
                </div>
                <div className="monthly-stats__month monthly-stats__month--may">
                    <img className="monthly-stats__month__image" src="/images/5/illustration.jpg" />
                    <h2>May</h2>
                    <p>You spent {monthlyData[5]} minutes in class!</p>
                    {(monthlyData[5] > (10*60)) && (
                        <img className="monthly-stats__month__trophy" src="/images/trophies/ten-hour-award.jpg" />
                    )}
                </div>
                <div className="monthly-stats__month monthly-stats__month--june">
                    <img className="monthly-stats__month__image" src="/images/june/illustration.jpg" />
                    <h2>June</h2>
                    <p>You spent {monthlyData[6]} minutes in class!</p>
                    {(monthlyData[6] > (10*60)) && (
                        <img className="monthly-stats__month__trophy" src="/images/trophies/ten-hour-award.jpg" />
                    )}
                </div>
                <div className="monthly-stats__month monthly-stats__month--july">
                    <img className="monthly-stats__month__image" src="/images/july/illustration.jpg" />
                    <h2>July</h2>
                    <p>You spent {monthlyData[7]} minutes in class!</p>
                    {(monthlyData[7] > (10*60)) && (
                        <img className="monthly-stats__month__trophy" src="/images/trophies/ten-hour-award.jpg" />
                    )}
                </div>
                <div className="monthly-stats__month monthly-stats__month--8">
                    <img className="monthly-stats__month__image" src="/images/8/illustration.jpg" />
                    <h2>August</h2>
                    <p>You spent {monthlyData[8]} minutes in class!</p>
                    {(monthlyData[8] > (10*60)) && (
                        <img className="monthly-stats__month__trophy" src="/images/trophies/ten-hour-award.jpg" />
                    )}
                </div>
                <div className="monthly-stats__month monthly-stats__month--9">
                    <img className="monthly-stats__month__image" src="/images/9/illustration.jpg" />
                    <h2>September</h2>
                    <p>You spent {monthlyData[9]} minutes in class!</p>
                    {(monthlyData[9] > (10*60)) && (
                        <img className="monthly-stats__month__trophy" src="/images/trophies/ten-hour-award.jpg" />
                    )}
                </div>
                <div className="monthly-stats__month monthly-stats__month--october">
                    <img className="monthly-stats__month__image" src="/images/october/illustration.jpg" />
                    <h2>October</h2>
                    <p>You spent {monthlyData[10]} minutes in class!</p>
                    {(monthlyData[10] > (10*60)) && (
                        <img className="monthly-stats__month__trophy" src="/images/trophies/ten-hour-award.jpg" />
                    )}
                </div>
                <div className="monthly-stats__month monthly-stats__month--november">
                    <img className="monthly-stats__month__image" src="/images/november/illustration.jpg" />
                    <h2>November</h2>
                    <p>You spent {monthlyData[11]} minutes in class!</p>
                    {(monthlyData[11] > (10*60)) && (
                        <img className="monthly-stats__month__trophy" src="/images/trophies/ten-hour-award.jpg" />
                    )}
                </div>
                <div className="monthly-stats__month monthly-stats__month--december">
                    <img className="monthly-stats__month__image" src="/images/december/illustration.jpg" />
                    <h2>December</h2>
                    <p>You spent {monthlyData[12]} minutes in class!</p>
                    {(monthlyData[12] > (10*60)) && (
                        <img className="monthly-stats__month__trophy" src="/images/trophies/ten-hour-award.jpg" />
                    )}
                </div>
                </>
            )
        }

        return null;
    }

    return (
        <div className="monthly-stats" {...props}>
            <h1>Monthly Class Stats</h1>
            <Months />
        </div>
    )
}