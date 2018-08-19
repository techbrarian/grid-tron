# grid-tron
A jQuery library for creating image map style, client-side, clickable grids.

Extends the jQuery object with additional methods.

getSquareGrid: set common class for all grid blocks within a set square
getRhombusGrid: set common class for all grid blocks within a set quadrilateral
gridify: create grid over a given div
makeSizeGrid: programmatically set the image div size based upon a ratio passed as an argument, and an image width
getLocationsGrid: get grid coordinates (including center coordinates) for a section of the grid with a common class

see commnets in the js file for more specifics and to see what arguments to pass

Getting grid coordinates
Grid-tron works by applying a flexible grid based upon a consistent number of columns and rows passed to the library as arguments. Because it is beyond awesome, each grid block it generates is assigned resultant x and y coordinates that are added to the block in the id and classes each block possesses. These grid coordinates are used as arguments for many methods in grid-tron and floater.js. Obtaining these coordinates is a simple matter of using developer tools to "inspect" the generated grid and find a grid block or blocks in a target area. Each block will have the coordinates in this format:  <div id="right_content_GRID_35_119" class="gridBlock x35 y119 "> </div> 

Grid blocks which have been mapped for tooltips or other purposes will also possess the "mappedLocation" class, along with any styles or common classes that have been programmatically assigned.

Entering Quadrilateral corner grid coordinates starting from the upper leftmost point and proceeding clockwise.

Future developers are encouraged to fiddle. Even in 1.0 form, grid-tron has many useful capabilities. As it extends the jquery library, its methods can be called as easily as jquery methods. The library is included separately in the stackguide folder so that devs can tinker with it, learn to do new things with stacksguide, and potentially expand on grid-tron's capabilities. Common classes can currently be assigned as squares with two grid blocks (upper left and bottom right) using the getSquareGrid method, or as quadrilaterals with four blocks, using the getRhombusGrid method. The grid is created using the gridify method. getLocationsGrid returns real (pixel level) x,y and center parameters for a common class. makeSizeGrid is used to programmatically set the image div size based upon a ratio passed as an argument, and an image width. If it is not passed a ratio it will try to determine the ratio from the background image, with the consequent loading and processing overhead. 




