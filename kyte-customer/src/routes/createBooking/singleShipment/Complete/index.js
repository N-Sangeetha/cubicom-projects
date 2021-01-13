import React, { Component } from 'react'
import { Input } from 'antd'
import moment from 'moment'
// import { TestCourierLogo } from '../../../../../../../common/components/logoBox'
import FloatSearch from '../../../../components/FloatSearch'
import DhlLogo from '../../../../assets/images/dhl.png'
import Review from './review'
import Footer from '../Footer'
import styles from './styles.module.scss'
class Complete extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isAdd: false,
      isReview: false,
      days: []
    }
  }

  componentDidMount() {
    this.getCurrentWeek()
  }

  onSearch = (searchString) => {
    console.log("enterr", searchString)
  }

  HandleAddBtn = () => {
    const { isAdd } = this.state
    this.setState({ isAdd: !isAdd })
  }

  getCurrentWeek = () => {
    var currentDate = moment();

    var weekStart = currentDate.clone().startOf('isoWeek');
    // var weekEnd = currentDate.clone().endOf('isoWeek');

    var days = [];

    for (var i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'days').format("MMM,D,ddd,YYYY,MM,DD,h:mm:ss a"));
    }
    const ddd = moment(weekStart).add(0, 'days').format("ddd")
    const ddd1 = moment(weekStart).add(1, 'days').format("ddd")
    // const copyDays = [...days]
    let replaceDay = days[0].replace(ddd, 'Today')
    days.splice(0, 1, replaceDay)
    replaceDay = days[1].replace(ddd1, 'Tomorrow')
    days.splice(1, 1, replaceDay)

    console.log("ddd", days)

    this.setState({ days: days })
  }

  nextWeekHandler = () => {
    const { days } = this.state
    const res = days[0].split(",")
    const date = `${res[3]}-${res[5]}-${res[4]}`

    var currentDate = moment(date, "YYYY-DD-MM");

    var weekStart = currentDate.clone().add(1, 'weeks').startOf('isoWeek')
    // var weekEnd = currentDate.clone().add(1, 'weeks').endOf('isoWeek')
    var day = [];

    for (var i = 0; i <= 6; i++) {
      day.push(moment(weekStart).add(i, 'day').format("MMM,D,ddd,YYYY,MM,DD,h:mm:ss a"));
    }

    this.setState({ days: day })
  }

  buttonHandler = () => {
    // const { isReview } = this.state
    this.setState({ isReview: true })
  }

  activeHandler = (index) => {
    for (let i = 0; i < 10; i++) {
      const getAllBoxId = document.getElementById(`dateBox-${i}`)
      getAllBoxId.classList.remove(`${styles.active}`)
    }
    const getBoxId = document.getElementById(`dateBox-${index}`)
    getBoxId.classList.add(`${styles.active}`)
  }

  render() {
    const { isAdd, isReview, days } = this.state
    return (
      <div className="container-fluid">
        {isReview ?
          <Review /> :
          <div>
            <h4 className={styles.heading}>Select Your Preferred Courier</h4>
            {isAdd ? null :
              <React.Fragment>
                <div className={`d-sm-none d-block ${styles.actions}`}>
                  <FloatSearch />
                </div>
                <p className={`${styles.textPrimary} ${styles.AddBtn}`} onClick={this.HandleAddBtn}> + Add Account</p>
              </React.Fragment>}
            <div className={`row ${styles.container}`}>
              <div className={`col-md-3 ${styles.logoContainer}`}>
                <div className={`d-none d-sm-block ${styles.actions}`}>
                  <FloatSearch />
                </div>
                <div className={styles.logoBoxes}>
                  <div className={styles.logoBox}>
                    <img src={DhlLogo} alt="logo" />
                  </div>
                  <div className={styles.logoBox}>
                    <img src={DhlLogo} alt="logo" />
                  </div>
                  <div className={styles.logoBox}>
                    <img src={DhlLogo} alt="logo" />
                  </div>
                  <div className={styles.logoBox}>
                    <img src={DhlLogo} alt="logo" />
                  </div>
                  <div className={styles.logoBox}>
                    <img src={DhlLogo} alt="logo" />
                  </div>
                  <div className={styles.logoBox}>
                    <img src={DhlLogo} alt="logo" />
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                {isAdd ?
                  <div className={`py-3 container`}>
                    <h4>Connect DHL</h4>
                    <p>Authenticate your DHL account to start shipping with your own negotiated rates.</p>
                    <div className="row w-75">
                      <div className="col-md-7 col-12 mt-2">
                        <div>
                          <span>Account Number</span>
                          <Input />
                        </div>
                      </div>
                      <div className="col-md-7 col-12 mt-2">
                        <div>
                          <span>DHL Account No.</span>
                          <Input />
                        </div>
                      </div>
                      <div className="col-md-7 col-12 mt-2">
                        <div>
                          <span>DHL Password</span>
                          <Input />
                        </div>
                      </div>
                      <div className="col-md-7 col-12 mt-2">
                        <div>
                          <span>DHL Site ID</span>
                          <Input />
                        </div>
                      </div>
                    </div>
                  </div> :
                  <div className={styles.dateContainer}>
                    <p>Schedule Pickup Date</p>
                    <div className={`${styles.datePicker}`}>
                      {days.length > 0 ?
                        days.map((el, i) => {
                          const res = el.split(",")
                          return (
                            <div key={i} id={`dateBox-${i}`} className={i === 0 ? styles.active : ''} onClick={() => this.activeHandler(i)}>
                              <p>{res[0]}</p>
                              <p>{res[1]}</p>
                              <p>{res[2]}</p>
                            </div>
                          )
                        })
                        : null}
                      <div onClick={this.nextWeekHandler}>
                        <p>+</p>
                      </div>
                    </div>
                    <div className={styles.calenderHead}>
                      <div></div>
                      <div><p className={styles.heading}>Delivery Date</p></div>
                      <div><p className={styles.heading}>Delivered By</p></div>
                    </div>
                    <div>
                      <div className={styles.calendar}>
                        <div>
                          <span className={styles.logo}>
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div>
                          <p><span className="font-weight-bold">10</span> Aug, 2020</p>
                          <p>Mon</p>
                        </div>
                        <div>
                          <p>12.00pm</p>
                        </div>

                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
            <div className="">
              {isReview ? null
                : <Footer
                  BtnText={isAdd ? "connect" : "Review"}
                  buttonHandler={this.buttonHandler}
                  cancleHandler={this.HandleAddBtn} />}
            </div>
          </div>}
      </div>
    )
  }
}

export default Complete