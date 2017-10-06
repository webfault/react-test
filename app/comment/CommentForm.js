"use strict";

import React from "react";

class CommentForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        console.log("提交表单");
        // 在组件中使用refs访问页面上的元素
        console.log(this.refs.author.value, this.refs.text.value);
    }

    render() {
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <input type="text" placeholder="姓名" ref="author"/>
                </div>
                <div className="field">
                    <textarea placeholder="评论" ref="text"></textarea>
                </div>
                <button type="submit" className="ui blue button">
                    添加评论
                </button>
            </form>
        );
    }
}

export {CommentForm as default};