import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './price.svg';
import preiskurantPDF from './preiskurant.pdf'; // Adjust the path if needed

class PriceFullDownload extends React.Component {
  constructor() {
    super();
    this.state = {
      display: false
    };
  }

  over = () => {
    this.setState({ display: true });
  };

  out = () => {
    this.setState({ display: false });
  };

  handleDownload = () => {
    window.open(preiskurantPDF, '_blank');
  };

  render() {
    return (
      <div
        style={{
          width: '92px',
          cursor: 'pointer',
          overflow: 'hidden',
          padding: '0px',
          margin: '0px',
        }}
        onClick={this.handleDownload} // Add the click event handler
      >
        <div>
          <div
            style={{
              width: '90px',
              height: '90px',
              border: '1px solid rgba(255, 255, 255, 0)',
              opacity: '.8',
              ':hover': {
                opacity: '1',
              },
            }}
          >
            <ReactVivus
              id="foo"
              option={{
                file: svg,
                animTimingFunction: 'EASE',
                type: 'oneByOne',
                onReady: console.log,
              }}
              style={{
                width: '150px',
                marginTop: '-33px',
                marginLeft: '-19px',
              }}
              callback={console.log}
            />
          </div>
        </div>
        <p
          style={{
            textAlign: 'center',
            lineHeight: '16px',
            margin: '0 auto',
            visibility: this.state.display ? 'visible' : 'hidden',
            transition: 'visibility .10s ease-in-out',
            fontSize: '15px',
            paddingTop: '2px',
          }}
        >
          Скачать прайслист
        </p>
      </div>
    );
  }
}

export default PriceFullDownload;
