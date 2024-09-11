import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet
        iaculis turpis. Praesent eget lectus eget orci iaculis dignissim eu at
        quam. Proin eu rhoncus justo. Vestibulum varius leo ac cursus
        vestibulum. Aenean cursus vel metus quis lacinia. Etiam id pharetra
        sapien, ac ullamcorper justo. Curabitur egestas ante libero, et egestas
        elit gravida elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet
        iaculis turpis. Praesent eget lectus eget orci iaculis dignissim eu at
        quam. Proin eu rhoncus justo. Vestibulum varius leo ac cursus
        vestibulum. Aenean cursus vel metus quis lacinia. Etiam id pharetra
        sapien, ac ullamcorper justo. Curabitur egestas ante libero, et egestas
        elit gravida elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet
        iaculis turpis. Praesent eget lectus eget orci iaculis dignissim eu at
        quam. Proin eu rhoncus justo. Vestibulum varius leo ac cursus
        vestibulum. Aenean cursus vel metus quis lacinia. Etiam id pharetra
        sapien, ac ullamcorper justo. Curabitur egestas ante libero, et egestas
        elit gravida elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet
        iaculis turpis. Praesent eget lectus eget orci iaculis dignissim eu at
        quam. Proin eu rhoncus justo. Vestibulum varius leo ac cursus
        vestibulum. Aenean cursus vel metus quis lacinia. Etiam id pharetra
        sapien, ac ullamcorper justo. Curabitur egestas ante libero, et egestas
        elit gravida elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet
        iaculis turpis. Praesent eget lectus eget orci iaculis dignissim eu at
        quam. Proin eu rhoncus justo. Vestibulum varius leo ac cursus
        vestibulum. Aenean cursus vel metus quis lacinia. Etiam id pharetra
        sapien, ac ullamcorper justo. Curabitur egestas ante libero, et egestas
        elit gravida elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet
        iaculis turpis. Praesent eget lectus eget orci iaculis dignissim eu at
        quam. Proin eu rhoncus justo. Vestibulum varius leo ac cursus
        vestibulum. Aenean cursus vel metus quis lacinia. Etiam id pharetra
        sapien, ac ullamcorper justo. Curabitur egestas ante libero, et egestas
        elit gravida elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet
        iaculis turpis. Praesent eget lectus eget orci iaculis dignissim eu at
        quam. Proin eu rhoncus justo. Vestibulum varius leo ac cursus
        vestibulum. Aenean cursus vel metus quis lacinia. Etiam id pharetra
        sapien, ac ullamcorper justo. Curabitur egestas ante libero, et egestas
        elit gravida elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet
        iaculis turpis. Praesent eget lectus eget orci iaculis dignissim eu at
        quam. Proin eu rhoncus justo. Vestibulum varius leo ac cursus
        vestibulum. Aenean cursus vel metus quis lacinia. Etiam id pharetra
        sapien, ac ullamcorper justo. Curabitur egestas ante libero, et egestas
        elit gravida elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet
        iaculis turpis. Praesent eget lectus eget orci iaculis dignissim eu at
        quam. Proin eu rhoncus justo. Vestibulum varius leo ac cursus
        vestibulum. Aenean cursus vel metus quis lacinia. Etiam id pharetra
        sapien, ac ullamcorper justo. Curabitur egestas ante libero, et egestas
        elit gravida elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet
        iaculis turpis. Praesent eget lectus eget orci iaculis dignissim eu at
        quam. Proin eu rhoncus justo. Vestibulum varius leo ac cursus
        vestibulum. Aenean cursus vel metus quis lacinia. Etiam id pharetra
        sapien, ac ullamcorper justo. Curabitur egestas ante libero, et egestas
        elit gravida elementum.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Proin venenatis, ligula non gravida porttitor,
        nisl mauris tristique nulla, ut ultricies quam metus vel eros. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed metus leo, fringilla consequat commodo sed, accumsan
        vitae nunc. Mauris nec justo est. Morbi nibh augue, tristique et nibh
        non, laoreet lobortis ligula. Fusce ullamcorper, purus sit amet
        condimentum blandit, turpis mi luctus nunc, at consectetur lectus nisl
        ut purus. Ut sed ornare dolor. Aenean euismod, erat vel congue porta,
        nibh mi tristique sem, malesuada ultrices lacus ligula eget risus.
        Praesent ornare vestibulum ex, at porta dui eleifend eget. Mauris
        pretium pharetra aliquam. Sed sit amet molestie eros, vitae tempus ante.
        Vestibulum sodales finibus magna tempor dignissim. Phasellus lacinia
        tempor convallis.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Proin venenatis, ligula non gravida porttitor,
        nisl mauris tristique nulla, ut ultricies quam metus vel eros. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed metus leo, fringilla consequat commodo sed, accumsan
        vitae nunc. Mauris nec justo est. Morbi nibh augue, tristique et nibh
        non, laoreet lobortis ligula. Fusce ullamcorper, purus sit amet
        condimentum blandit, turpis mi luctus nunc, at consectetur lectus nisl
        ut purus. Ut sed ornare dolor. Aenean euismod, erat vel congue porta,
        nibh mi tristique sem, malesuada ultrices lacus ligula eget risus.
        Praesent ornare vestibulum ex, at porta dui eleifend eget. Mauris
        pretium pharetra aliquam. Sed sit amet molestie eros, vitae tempus ante.
        Vestibulum sodales finibus magna tempor dignissim. Phasellus lacinia
        tempor convallis.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Proin venenatis, ligula non gravida porttitor,
        nisl mauris tristique nulla, ut ultricies quam metus vel eros. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed metus leo, fringilla consequat commodo sed, accumsan
        vitae nunc. Mauris nec justo est. Morbi nibh augue, tristique et nibh
        non, laoreet lobortis ligula. Fusce ullamcorper, purus sit amet
        condimentum blandit, turpis mi luctus nunc, at consectetur lectus nisl
        ut purus. Ut sed ornare dolor. Aenean euismod, erat vel congue porta,
        nibh mi tristique sem, malesuada ultrices lacus ligula eget risus.
        Praesent ornare vestibulum ex, at porta dui eleifend eget. Mauris
        pretium pharetra aliquam. Sed sit amet molestie eros, vitae tempus ante.
        Vestibulum sodales finibus magna tempor dignissim. Phasellus lacinia
        tempor convallis.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Proin venenatis, ligula non gravida porttitor,
        nisl mauris tristique nulla, ut ultricies quam metus vel eros. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed metus leo, fringilla consequat commodo sed, accumsan
        vitae nunc. Mauris nec justo est. Morbi nibh augue, tristique et nibh
        non, laoreet lobortis ligula. Fusce ullamcorper, purus sit amet
        condimentum blandit, turpis mi luctus nunc, at consectetur lectus nisl
        ut purus. Ut sed ornare dolor. Aenean euismod, erat vel congue porta,
        nibh mi tristique sem, malesuada ultrices lacus ligula eget risus.
        Praesent ornare vestibulum ex, at porta dui eleifend eget. Mauris
        pretium pharetra aliquam. Sed sit amet molestie eros, vitae tempus ante.
        Vestibulum sodales finibus magna tempor dignissim. Phasellus lacinia
        tempor convallis.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Proin venenatis, ligula non gravida porttitor,
        nisl mauris tristique nulla, ut ultricies quam metus vel eros. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed metus leo, fringilla consequat commodo sed, accumsan
        vitae nunc. Mauris nec justo est. Morbi nibh augue, tristique et nibh
        non, laoreet lobortis ligula. Fusce ullamcorper, purus sit amet
        condimentum blandit, turpis mi luctus nunc, at consectetur lectus nisl
        ut purus. Ut sed ornare dolor. Aenean euismod, erat vel congue porta,
        nibh mi tristique sem, malesuada ultrices lacus ligula eget risus.
        Praesent ornare vestibulum ex, at porta dui eleifend eget. Mauris
        pretium pharetra aliquam. Sed sit amet molestie eros, vitae tempus ante.
        Vestibulum sodales finibus magna tempor dignissim. Phasellus lacinia
        tempor convallis.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Proin venenatis, ligula non gravida porttitor,
        nisl mauris tristique nulla, ut ultricies quam metus vel eros. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed metus leo, fringilla consequat commodo sed, accumsan
        vitae nunc. Mauris nec justo est. Morbi nibh augue, tristique et nibh
        non, laoreet lobortis ligula. Fusce ullamcorper, purus sit amet
        condimentum blandit, turpis mi luctus nunc, at consectetur lectus nisl
        ut purus. Ut sed ornare dolor. Aenean euismod, erat vel congue porta,
        nibh mi tristique sem, malesuada ultrices lacus ligula eget risus.
        Praesent ornare vestibulum ex, at porta dui eleifend eget. Mauris
        pretium pharetra aliquam. Sed sit amet molestie eros, vitae tempus ante.
        Vestibulum sodales finibus magna tempor dignissim. Phasellus lacinia
        tempor convallis.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Proin venenatis, ligula non gravida porttitor,
        nisl mauris tristique nulla, ut ultricies quam metus vel eros. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed metus leo, fringilla consequat commodo sed, accumsan
        vitae nunc. Mauris nec justo est. Morbi nibh augue, tristique et nibh
        non, laoreet lobortis ligula. Fusce ullamcorper, purus sit amet
        condimentum blandit, turpis mi luctus nunc, at consectetur lectus nisl
        ut purus. Ut sed ornare dolor. Aenean euismod, erat vel congue porta,
        nibh mi tristique sem, malesuada ultrices lacus ligula eget risus.
        Praesent ornare vestibulum ex, at porta dui eleifend eget. Mauris
        pretium pharetra aliquam. Sed sit amet molestie eros, vitae tempus ante.
        Vestibulum sodales finibus magna tempor dignissim. Phasellus lacinia
        tempor convallis.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Proin venenatis, ligula non gravida porttitor,
        nisl mauris tristique nulla, ut ultricies quam metus vel eros. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed metus leo, fringilla consequat commodo sed, accumsan
        vitae nunc. Mauris nec justo est. Morbi nibh augue, tristique et nibh
        non, laoreet lobortis ligula. Fusce ullamcorper, purus sit amet
        condimentum blandit, turpis mi luctus nunc, at consectetur lectus nisl
        ut purus. Ut sed ornare dolor. Aenean euismod, erat vel congue porta,
        nibh mi tristique sem, malesuada ultrices lacus ligula eget risus.
        Praesent ornare vestibulum ex, at porta dui eleifend eget. Mauris
        pretium pharetra aliquam. Sed sit amet molestie eros, vitae tempus ante.
        Vestibulum sodales finibus magna tempor dignissim. Phasellus lacinia
        tempor convallis.
      </p>
    </div>
  );
}

export default ModalPage;
