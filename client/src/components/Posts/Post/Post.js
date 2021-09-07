import React from 'react';

// see more about material-ui components at: https://material-ui.com/
import { Card, CardActions, CardContent, CardMedia, Button, Typography  } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

// ({ post }) gets post prop from parent component
const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            {/* three dot (edit) button over image */}
            <div className={classes.overlay2}>
                 {/* onClick setCurrentId is set to equal post._id> */}
                <Button 
                style={{color: 'white'}} 
                size="small" 
                onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon frontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                {/* map over all tags with #, the tag, then a space */}
                <Typography variant="body2" color="textSecondary" >{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent> 
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontsize="small" />
                    {/* &nbsp; adds space between Kike and likeCount */}
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    &nbsp; Delete
                </Button>
            </CardActions>

        </Card>
    )
}

export default Post;

