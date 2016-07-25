var CommentBox = React.createClass({

	loadCommentsFromServer: function() {
	
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
		}.bind(this),
		error: function(xhr, status, err) {
			console.log(this.props.url, status, err.toString());
		}.bind(this)

		});
	},

	getInitialState: function() {
		return {data: []};
	},

	componentDidMount: function() {
		this.loadCommentsFromServer();
    	setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  	},

	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>

		);
	}
});

var CommentList = React.createClass({
  render: function() {
  	var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <form className="commentForm">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		)
	}
})

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={1000} />,
  document.getElementById('content')
);