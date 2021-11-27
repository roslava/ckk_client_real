import React from 'react'
import classes from './Section.module.scss'

const Section = (props) => {
    return(
        <section>
          <div className={classes.SectionContainer}>
              <div className={classes.Section}>
                {props.children}
              </div>
          </div>  
        </section>
    )
}

export default Section