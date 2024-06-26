import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductCard = ({ product }) => {
  const { _id, title, img, price } = product;

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deletingpd/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your product has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Price:$ {price}</p>
        <div className="card-actions">
          <Link to={`/products/${_id}`}>
            <button className="btn btn-orange">Purchase</button>
          </Link>

          <button onClick={() => handleDelete(_id)} className="btn btn-orange">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
