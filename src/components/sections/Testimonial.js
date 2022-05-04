import React, {useRef} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Meet the Team',
    paragraph: 'We are a group of Software Engineering students from the University of Waterloo who are passionate about Web3.'
  };


  // const myRef = useRef(null);

  // export function const executeScroll () {
  //   myRef.current.scrollIntoView({behavior: 'smooth'});
  // }
  
  // // = () => myRef.current.scrollIntoView();

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div  className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  {/* <p className="text-sm mb-0">
                    — I like men especially Heet
                      </p> */}
                  <img class="profile-picture" alt="Karthik Nambiar image" src="https://cdn.discordapp.com/attachments/575479716782276610/971539388498591804/IMG_6090.png"></img>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0"> {//has-top-divider
                }
                  <span className="testimonial-item-name text-color-primary">Karthik Nambiar</span>
                  {/* <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">COO</a>
                  </span> */}
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div>
                  {/* <p className="text-sm mb-0">
                    — Web3
                      </p> */}
                  <img class="profile-picture" alt="Chris Abey image" src="https://cdn.discordapp.com/attachments/957091360089989130/971538855436111932/IMG_5047.jpg"></img>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 "> {//has-top-divider
                }
                  <span className="testimonial-item-name text-color-primary">Chris Abey</span>
                  {/* <span className="text-color-low"> / </span> */}
                  {/* <span className="testimonial-item-link">
                    <a href="#0">CTO</a>
                  </span> */}
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div >
                  {/* <p className="text-sm mb-0">
                    — Apply gauss law
                      </p> */}
                  <img class="profile-picture" alt="Adrian Gri image"src="https://cdn.discordapp.com/attachments/957091360089989130/971534139935322152/IMG_2105.jpg"></img>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 "> {//has-top-divider
                }
                  <span className="testimonial-item-name text-color-primary">Adrian Gri</span>
                  {/* <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">CEO</a>
                  </span> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;