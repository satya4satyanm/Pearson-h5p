import './h5p-integration';
import H5PStandalone from './Pearson-h5p.class';
import 'H5PEventDispatcher';
import 'H5PxAPI';
import 'H5PxAPIEvent';
import 'H5PContentType';

window.H5P.preventInit = true;

export default { H5P: H5PStandalone };