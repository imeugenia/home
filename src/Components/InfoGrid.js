import React, { Component } from "react";
import Longboard from "./longboard";
import CrashButton from "./crashButton";
import Ghost from "./Ghost";
import { fetchPosts, fetchCode, fetchPics } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRandomSymbol } from "../forDataCrashing";
import { getItems } from "../generics";
import cloneDeep from "lodash/cloneDeep";
import "../index.css";

class InfoGrid extends Component {
  state = {
    textPosts: [],
    code: [],
    pics: [],
    crashStart: null,
    clickCount: 0,
  };

  async componentDidMount() {
    await this.props.fetchPosts();
    await this.props.fetchCode();
    await this.props.fetchPics();

    const { posts, code, pics } = this.props;
    this.setState({
      textPosts: getItems(posts),
      code: getItems(code),
      pics: getItems(pics),
    });
  }

  getStyle = (item) => {
    const bgColor = item.bg ? "#ffded8" : "";
    const padding = item.bg ? "2rem" : "0";
    const style = {
      order: item.order,
      background: bgColor,
      padding: padding,
    };
    return style;
  };

  mixTextSymbols = (data) => {
    return data.map((item) => {
      Object.entries(item).forEach(([key, value]) => {
        if (key !== "order" && key !== "bg" && key !== "col") {
          let newValue = "";
          for (let i = 0; i < value.length; i++) {
            const shouldBechanged = Math.random();
            if (shouldBechanged < 0.7 || value[i] === " ") {
              newValue += value[i];
            } else {
              newValue += getRandomSymbol(value[i]);
            }
          }
          item[key] = newValue;
        } else {
          item[key] = value;
        }
      });

      return item;
    });
  };
  mixCodeSymbols = (data) => {
    return data.map((item) => {
      Object.entries(item).forEach(([key, value]) => {
        if (key === "header") {
          let newValue = "";
          for (let i = 0; i < value.length; i++) {
            const shouldBechanged = Math.random();
            if (shouldBechanged < 0.7 || value[i] === " ") {
              newValue += value[i];
            } else {
              newValue += getRandomSymbol(value[i]);
            }
          }
          item[key] = newValue;
        } else if (key === "text") {
          Object.entries(item[key]).forEach(([key2, value]) => {
            let newValue = "";
            for (let i = 0; i < value.length; i++) {
              const shouldBechanged = Math.random();
              if (shouldBechanged < 0.7 || value[i] === " ") {
                newValue += value[i];
              } else {
                newValue += getRandomSymbol(value[i]);
              }
            }
            item[key][key2] = newValue;
          });
        } else {
          item[key] = value;
        }
      });

      return item;
    });
  };
  handleMixSymbols = () => {
    const { posts, code } = this.props;
    const textPosts = getItems(posts);
    const codePosts = getItems(code);
    let crashedTextPosts = cloneDeep(textPosts);
    crashedTextPosts = this.mixTextSymbols(crashedTextPosts);

    let crashedCode = cloneDeep(codePosts);
    crashedCode = this.mixCodeSymbols(crashedCode);

    this.setState({ textPosts: crashedTextPosts, code: crashedCode });
  };
  scramble = () => {
    const { posts, code } = this.props;
    const textPosts = getItems(posts);
    const codePosts = getItems(code);
    this.timerID = setInterval(() => {
      this.handleMixSymbols();
    }, 100);
    setTimeout(() => {
      clearInterval(this.timerID);
      this.setState({
        textPosts: textPosts,
        code: codePosts,
        crashStart: null,
      });
    }, 10000);
  };
  handleClick = () => {
    const { crashStart } = this.state;
    if (crashStart !== null) {
      //check if 10sek passed
      const current = Date.now();
      if (current - crashStart < 10000) {
        return;
      } else {
        const newCrashStart = Date.now();
        this.setState({ crashStart: newCrashStart });
        this.scramble();
      }
    } else {
      const newCrashStart = Date.now();
      this.setState({ crashStart: newCrashStart });
      this.scramble();
    }
  };
  render() {
    const { textPosts, code, pics, crashStart } = this.state;
    const postList = textPosts.map((item) => {
      const colNum = "col-" + item.col;
      const style = this.getStyle(item);
      if (item.title) {
        return (
          <div className={colNum} style={style} key={item.order}>
            <h4>
              <span className="red-text">{item.title}</span>
            </h4>
            <p>{item.text}</p>
          </div>
        );
      }
      if (item.quote) {
        style.color = "#ff6f56";
        return (
          <div className={colNum} style={style} key={item.order}>
            <span className="quote">{item.quote}</span>
          </div>
        );
      }
      return (
        <div className={colNum} style={style} key={item.order}>
          <h3>
            <span className="red-text">{item.pretext} </span>
            {item.text}
          </h3>
        </div>
      );
    });
    const codeList = code.map((item) => {
      const style = this.getStyle(item);
      style.height = "32rem";
      return (
        <div className="col-1" style={style} key={item.order}>
          <h3>
            const <span className="red-text">{item.header}</span> =&nbsp;
            <pre>{JSON.stringify(item.text, undefined, 2)}</pre>
          </h3>
        </div>
      );
    });

    const picList = pics.map((item) => {
      const colNum = "col-" + item.col;
      const style = this.getStyle(item);
      return (
        <div className={colNum} style={style} key={item.order}>
          <img src={item.link.fields.file.url} alt={item.alt} />
        </div>
      );
    });
    return (
      <div className="flexbox wrap">
        {postList}
        {codeList}
        {picList}
        <CrashButton scramble={this.handleClick} />
        {crashStart === null ? (
          <Longboard />
        ) : (
          <Ghost ghostClass="horizontal-ghost" order={11} colNum={1} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.data.posts,
    pics: state.data.pics,
    code: state.data.code,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
    fetchCode: bindActionCreators(fetchCode, dispatch),
    fetchPics: bindActionCreators(fetchPics, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoGrid);
