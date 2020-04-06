import * as React from "react";
import { animated, useSprings } from "react-spring";

import "./landing.scss";

// interface IAnimated {
//   currentClass: string;
//   animationClass: string;
//   delay: number;
// }

// interface IState {
//   name?: IAnimated;
//   title?: IAnimated;
//   blogButton?: IAnimated;
//   findOutMore?: IAnimated;
// }

interface IProps {
  userDetails: IUserDetails;
}

export interface IUserDetails {
  firstName: string;
  lastName: string;
  title: string;
}

// const config = { mass: 5, tension: 2000, friction: 200 };

const Landing: React.FunctionComponent<IProps> = ({
  userDetails: { firstName, lastName, title }
}) => {
  const items = [
    <h1 className="heading-name">
      {firstName} {lastName}
    </h1>,
    <h2 className="heading-title">{title}</h2>,
    <a href="https://blog.harveydelaney.com" className="blog-container">
      Visit my Blog
    </a>
  ];
  const itemAnimations = [
    {
      delay: 0
    },
    {
      delay: 150
    },
    { delay: 300 }
  ];

  const springs = useSprings(
    items.length,
    itemAnimations.map(item => ({
      delay: item.delay,
      from: {
        opacity: 0,
        y: 0
      },
      opacity: 1,
      y: 50
    }))
  );

  return (
    <section className="landing-container">
      <div className="landing-overlay" />

      <div className="container container-heading">
        {springs.map(({x, ...rest}, index) => (
          <animated.div key={index} style={{...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}></div>}>
            {items[index]}
          </animated.div>
        ))}
      </div>

      <div className="container container-footer">
        <span className="find-out">Find out more about {firstName}</span>
        <i className="fa fa-chevron-down" />
      </div>
    </section>
  );
  // constructor(props: any) {
  //   super(props);

  //   this.state = {
  //     name: { currentClass: "hide-down", animationClass: "show", delay: 150 },
  //     title: { currentClass: "hide-down", animationClass: "show", delay: 450 },
  //     blogButton: {
  //       currentClass: "hide-down",
  //       animationClass: "show",
  //       delay: 600
  //     },
  //     findOutMore: {
  //       currentClass: "hide-down",
  //       animationClass: "show",
  //       delay: 750
  //     }
  //   };
  // }

  // public componentDidMount() {
  //   Object.keys(this.state).forEach(key => {
  //     const obj: IAnimated = this.state[key];

  //     this.animateWithDelay(key, obj);
  //   });
  // }

  // public render() {
  //   const { userDetails } = this.props;
  //   const { name, title, blogButton, findOutMore } = this.state;

  //   return (
  //     <section className="landing-container">
  //       <div className="landing-overlay" />

  //       <div className="container container-heading">
  //         <h1 className={`heading-name ${name && name.currentClass}`}>
  //           {userDetails.firstName} {userDetails.lastName}
  //         </h1>
  //         <h2 className={`heading-title ${title && title.currentClass}`}>
  //           {userDetails.title}
  //         </h2>

  //         <a
  //           href="https://blog.harveydelaney.com"
  //           className={`blog-container ${blogButton &&
  //             blogButton.currentClass}`}
  //         >
  //           Visit my Blog
  //         </a>
  //       </div>

  //       <div
  //         className={`container container-footer ${findOutMore &&
  //           findOutMore.currentClass}`}
  //       >
  //         <span className="find-out">
  //           Find out more about {userDetails.firstName}
  //         </span>
  //         <i className="fa fa-chevron-down" />
  //       </div>
  //     </section>
  //   );
  // }

  // private animateWithDelay(key: string, animateObj: IAnimated) {
  //   setTimeout(() => {
  //     this.setState({
  //       [key]: { ...animateObj, currentClass: animateObj.animationClass }
  //     });
  //   }, animateObj.delay);
  // }
};

export default Landing;
