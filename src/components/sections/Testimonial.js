import React, {useRef} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import karthik from '../../assets/images/karthik.png';
import chris from '../../assets/images/chris.jpg';
import adrian from '../../assets/images/adrian.png';

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
                  <img class="profile-picture" alt="Karthik Nambiar image" src={karthik}></img>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0"> {//has-top-divider
                }
                  <span className="testimonial-item-name text-color-primary"><a style={{color: '#6964c6'}} href="https://twitter.com/3pmkarthik">Karthik Nambiar</a></span>
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
                  <img class="profile-picture" alt="Chris Abey image" src={chris}></img>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 "> {//has-top-divider
                }
                  <span className="testimonial-item-name text-color-primary"><a style={{color: '#6964c6'}} href="https://twitter.com/ChrisAbey3">Chris Abey</a></span>
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
                  <img class="profile-picture" alt="Adrian Gri image"src={adrian}></img>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 "> {//has-top-divider
                }
                  <span className="testimonial-item-name text-color-primary"><a style={{color: '#6964c6'}} href="https://twitter.com/AdrianGri_">Adrian Gri</a></span>
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