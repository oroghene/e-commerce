import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'; // named imports
import { AddShoppingCart } from '@material-ui/icons'; // named imports must be typed the same. check docs for more info

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='p' color='textSecondary' />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
    
}


export default Product
