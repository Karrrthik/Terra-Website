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
                  <img class="profile-picture" alt="Adrian Gri image" src="data:image/jpeg;base64,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"></img>
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
                  <img class="profile-picture" alt="Chris Abey image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAWEBANDQ0NDRUVDRsQEA4WIB0iIiAdHx8kKDQsJCYxJx8fLTstMStAMDAwIys/TT81QTQ5MDUBCgoKDg0OFQ8PFSsZFiU3Kys3LSs3KzMrKys3Nzc3NzctNy0rKy0rLS0tNysrKysrKysrKysrKysrKysrNysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQQGAgMFB//EADsQAAEEAAUBBQYEBQMFAQAAAAEAAgMRBAUSITFBBiJRYXETMoGRwdFCobHhByMzUmIUcvAWJIKishX/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAjEQACAgICAwACAwAAAAAAAAAAAQIRAyExQQQSIjJRBUJh/9oADAMBAAIRAxEAPwDzdCQQE4o0IQiYYKVoQiYEwhC1ACkIQjRgQs42X6LKbSON+PJAxqSK2GY1VbbdFrQsI0lkPzWJKJhpUmhYAin+6SZ+6ARIQkgYaEIQCFoRSFjCTQmEwoqTTQmoximn+6EaBYk0IRo1gsbWRWJU5PoKNjXADxNj0+SwNuNkpAhBQGAhMg/BDG30Wb7CNAMgPBaXg+CYJ6LJ77558UQGATWKzA80EESChMpqAYlJZJA8+aUIk0IQowIQhAIBMBCYVUhBpJoRoFiKEJrGBJCEQGLisUyVlpHTdRfJVGFJgKTHhrUuDBEni1N5EiixNnMtZNN8qyxZEHDfYmui2nsoDw4rLKF4H0VUtHKxtW7/AKOcRYdXN2uHmuUOgPiEfdMV4mjmlJpQUkwhsQfugJlVEMaSWRWKUYEk7QgYEIQsYYTQAhVEGkhNYAghNCxhITpSMGyzdA1VA8ISdK2NFezpENbYBut2YYYsIJFB4sbbfBY4aO+FzykmrLxjUqZJikAVgyvD6qNjouDh8vDj3nUpv/5ksVPhmDiN6uioeqfZf2a6LzhsFtdLczDUeFXeznah+sRTi72BAV5BYRfkCl4dDqVo50rDW2xpU/OsHO+9QGnf1VozDtDhIXaXuN+TSVyMbnuFk2DiCbqxVp/rpC3HtlCx0QadlEVizXBtc10rfVcAtVYO0c2RUxgJu+6EH7rpICSTKSARITSSsIIQhAJmEIpCsTBBQmQsYVIpCAsYak4B9OI8WlRq+izhfpIPgUk43FoaDqSZ2szwz3xPffdhIa3yJUbKcPqsLZNI4xO322Nf3eaWTS6XC/JcL/E76XtZKlyd9jkjbZdfJMoLRIJjqjc22DUWua7euhBG/UdBwrFlTWPaLFrfjqY0mgAAeiWM2hnBHnuJwzmSDgEHobV/icRh2uvdzRsqb/VmHm4K/SQ1Ez4JW7YyVFJx4jDw6WOg8loc6MkOPkQDa6MWHwZGgwxmyWktHeaeNwQCDsu3iezkcwBprhsdJbVfJasZkBd7HljcMzREAGgBvhsN/iqWktE62VLNMvbhxLRuN4BaCfdKqDjZtej5rl/t5oMOXaWudchPgFyO2ETYWGJtBgexkTQwCiAdRvnw+afFPaX7J5YWm/0U9BQU12nGYoTpCBhWkmhKwoxQnSEtDGSYSpZBWJiIRSySKxjEJoTKxjFNCFjG9mKcGFhAI3q+W+izwr6I+CjtW6FcuZJcHVhk3yXbI8y0gb+C353mZe0jhoG/mqzgCSRXQWpom9p3QR1C5Ejrsn9moYnyCnAm/FX7F4amgN6AKgZdkcjala7SW3pI3+CtLHuPszI92wB2cW360jQLO/gmDSPEKNm+KDW/JRMXjg1oIPNKvZpmZINnYXueAhzpArtknDgOeZHbDXVnih0H5rzvtBmRxM75PwaiIh4Nv68/FWbtJn8TYRFBKJHlojLmsIDW1vuepVIK6/Hx1tnN5GROkhIIQnX1XScpihMpFYIJJoQZhJoQlGHSE7QqiAhCFjCQmnSxhIpMBCxhxjdbCNJU2DBgYf2x950zY2elGysX4cuFjkLmz6krOrCvkm5HILN7iuFNdlsXtOC3VuCCuHl0+hwvjgq3YSBsoBvw4XM04s6I0zq4PKJGgGGdhBA7p7t+vI/JScRDimABxjedqGo/qAo0WXu2pxXRiBbWo3X5LX/gaOZiXvDaeADfQ2FVe0eK0s0Dl/PkFYM5xVlxG4a0krz/ABeIMji93J/IeCrhx27IZslRo0oQhdhxgg/dCCPqsYSEIWMJFITpAIihCaARoQhOICYH0QmiYYKepY2uxlnZnFT0Qz2bDXff3RXiByVqMcZdDLspkmGodyMXb3ceg8T/AM2VzwPZTDwi3gzv6ahTB/4/e1rzMEUOLFADYNHgPBXx4fZ7FlKjiYyCsOxrfdilAPxHPz/VY4aLZdPDMFFrhbHjS8LIYAxu0ndrhbHdHD7rn/kMLTUlwdXiz1T5K7j8JRtvKeX5o+I108F1sfBRHgpGW5fDI4Bw3K8721s6vXZtwvaU2P0XSOOfNQaNIPK3MyWOPelJwsAvYbBL7LoPqR4YWsfFe9yx3f4t15/2iy44fEyx6SGiR/sr6svZekjD+0xELBwwjESno1jTY+ZofPwU92WRYlz2ytD2vp4BF0eteC7vFjcG2cnkv6SR4qkvQ+0n8OHMaZMGTIBZdEffA/xPX059VRcTgJov6sT4741xFn6hVIEZB+6dI/dAwgkU0r5WMJNFdehtJAIIQhYxknS6WTZHiMW6oWWB7zidLG/H7K8ZV2DgjozuM7+rQdEQ+W5+Y9FRIQ84ihc4hrQXOcaAAsn4K35N2BmkAfiHexad9I3kP0H5+i9GwOXxQioo2MH+LA39FI2vcj5o0MV/L+zWFw+7IgXD8Tu+/wCZ4+FKfFHrcQOAt0+Mi41WfIErRhXnWdJ2NcdVZR0LYY6ANaSq9mWHvRsd2H0VoxY1c3soePwgLQb3ZuN1THKhZIqjY11stkaR7KUWw1Xi0+IWOKwlU5o2cA5qTIzyFadTjTETcXaFnGVaaF6mndjvELnNy52xaaIqirTgZw5pil3YePFp8VoxeFfBZI1x8tcOK8/BeH5HjuD+eD1MOZTW+SLhY3urWbOymySCMBrRrkedMbBy8/bzXOOZfhjbre69LR+pPQKyZHlhhaZpe9PIOf7B4DwCjiwuW3wPkyKJrhwXsIywnVNMQ7EOA5PQDyHA/dbsFBU0Z4qOT48fupTo7NkblYcSO392KMfEk39F6cUox9UcEtu2dGWXSBY5UbFSBzCDHd3sQCD6p+2bJRvjlRM2xBogGhXQblLGO6M3op+bdmMPPqpggl30uYNLb828fVed5hgZIHmORulzb9CPEeS9fZbiA0WTVIzDIG4hunERggXpJdT2+hCrOCER4qUqXoGZfw7O5w8u/wDbJv8A+wH0VTzbIMTht5YiGjbUDrZ8xx8VBxaGOVaE66DlFIBEhBCEDHsOTRewa1jBcbaFdW+YXTZiSCQByeXfYLCKDSaPiFO/09n1AXW2iasInW0knm6A2WnFRgN0MHfk2J60tujSRfCkYeOySUt1sY1jL2NYG6Rtya3WvCYANJddjounyo9aTXQpVJhpEaZgKjCDUD6rozw7bclZYbCUBaPtSBRx3YYAyQV7oEsX+08j5rmxsp1Fd7O4yySOZosttrvMLA4Rsnfbwa2+6rGetiuJyMRLHC0vkcGtHU/TxKrmL7YOf/Ljc+GMOHuxte+QedkV6KZ2oypr5WF+p9bNAdTGqm+wEc74wbDT3b5pXx41KrJyk1wWfC9snwSNJw2uFtWXS3L6joB5fmvQ8rzSHFxiWF4e01Y/Ew+BHQrzrsnkQxcr3yf0Ye60f3vr6fZWWHs/JHN7TCuERbTf8HjwcOoUc2KCk0mPCUmrZayASAuYyIyS4gX7z26fKgB9Ct2SZq2Zo1NMUjWjU13XzB6/qp2DwYaS7qVzX62V5IGJy8saNBNGtX3XGzcFuiMbueRwrXipACGnq0kri5ZhBLiXSkdyLus9VTHPVsWS6R0Mqy0MAc73iB8FqzHEgP8AJoNro4ubSKHKrwaZZ2s6A6nfBLG5NyYXrSOhh8K9/f0iMGi0fid6pZjhYxGQ4ai8aNPR3lXVdQtLRzQFk2udH33mU+62xH5+aVO2GqPHO22Sf6TEWwaYpO9HX4D1b/zxVcte1dpMqZiY3sePe3aerHdCvG8ZhnRPfG8U6NxaUJx7FX6NJdvfjfRCSakMe9YSQTRB34mgtd6qbED+RXBy+b2Em/8ATkprvLwKsDfe+I/RdU1TFjs2PYKopRxEei2St2WEUnQqfQxva2lHkG6kA7LURuggmTFuaFrYFsalZjXjGgt3C1Ru7u1BbsVwoGIdTTXgmjtAZVe1UoY8F0m92Gt+qoOr2mIklI7pc6vTgK3Z0Gj2kh3IaSLVUgGlg8aXqYsaaRyZJUeldkcGGYWIxkOc5mqSjwTv+3wVowsNCzyVTOx+EMbYJGOOmZupwPRXvovP8jUuTpx8GlsLbNNHyUhqwjCJH0oPZQ5041y+IohdGCFsbaaAALUXCR24lTJvBGT4QEuyBiep67qJ2fj70kh8dIUjMJQ1rvRGWx6YWg7arc5U/qL2bpQZDvtGDx/f6+SbxewFAcLaBfkEEdBz+TVOxjl45tbDdzrDR9V5b/EPAaJWSjiRpY71H7H8l7BLEBdbk7E9SqB/EbCXhi6v6csb/nt9VVbi0JLWzy5NBQucY9r9mHNIPXZSMsxp1tjd7zaYfPwKyxsOh1jh9lcvMHFr2SDlpHx8l3qpInwXMjZQp+6bUnCTB7GuG4cAVrxTNlzLTplHtBhpwdltcFxdRaV0oZrATSjWwJkphWxq1BZxlSYw5xYpcfNJQxp8aXYmOyref+7apiVsEuCi9ppy6mDh3ef6dFyqtp8A0qbmB1TO/wAWMb+q1SgChXJDQF60ZUklyefkl9UX7sTOHwxgjdjWtVvJ4VC7DOLXvYemlXx3T4LzPJVTO7H+JsadlGkNmltcdlrGyhEc3YcUspD9Vohlo79VjjJQ1pPqtWzWcvGfzJAwcXblOc/vV0aAFGyuO7kPLrpc/DYl0r3u3DPaPa0/3gGh8Far1+hLO/G++Pn9lIaABQ+KhwGlJMrWtLnEADklRkh0KQeSp/8AECMf6Gc9AGf/AEFamF0u5BazoOHO8yuJ20wftcJLEOXM7vqNx+YCaPNAlweFFCChSYUj3TK8WMTDRP8AMbTX/wC7x+KgY2IlpHUIQu9am0iPRJ7L46iYnHj3fRWWRthCFLOqmPB6ORi4iCtcEhGx4J2QhFbQHydiN23yWxhQhQZRCmOyr3aU1EShCph/JCz4PMY5rklceriB5pzOJs9eU0L1cCVWefNfRb+y8n/cn/JrSr3inkAEIQuDyV9o7cXBg2ewkXlCFztFBsFlRMxdqIYOp3QhGPIHwbp5BFETxTdvXouRh5mtAAIFAAeSSFXGtMWTo6OHxg2DAZHHw4+amw4YuIdIdThwPwR+nifNCFLJ88DR2THkNHP7qvZ/iQNA4LnWfIdUIQwrZp8HhU5Bc4jguNIQhRlyNHg//9k="></img>
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
                  <img class="profile-picture" alt="Adrian Gri image"src="data:image/jpeg;base64,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"></img>
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