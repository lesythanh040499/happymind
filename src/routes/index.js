import adminRouter from './admin.js';
import blogRouter from './blog.js';
import blogdetailRouter from './blogdetail.js';
import foodcaloriesRouter from './foodcalories.js';
import homepageRouter from './homepage.js';
import userRouter from './user.js';
import videoRouter from './video.js';

export function route(app) {
    app.use('/', homepageRouter);
    app.use('/video', videoRouter);
    app.use('/food', foodcaloriesRouter);
    app.use('/blog', blogRouter);
    app.use('/admin', adminRouter);
    app.use('/blogdetail', blogdetailRouter);
    app.use('/user', userRouter);
    app.use('/blog', blogRouter);
}
