var CommentBox = React.createClass({displayName: 'CommentBox', 
	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList />
				<CommentForm />
			</div>

		);
	}
});

var CommentList = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className: "commentList"},
			"Hello, I am a comment list!"
			)
		);
	}
})

var CommentForm = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className: "commentForm"},
				"Hello world, I am a comment form!"
			)
		);
	}
});

ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById('content')
);