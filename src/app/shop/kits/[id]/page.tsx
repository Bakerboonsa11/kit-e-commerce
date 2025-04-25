'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { IKit } from '../../../../models/product';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

// Correct Params interface for useParams (App Router)
interface Params {
  [key: string]: string | string[];
}

export default function KitDetailPage() {
  const [id, setId] = useState<string | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const params = useParams<Params>();

  useEffect(() => {
    if (params?.id) {
      setId(Array.isArray(params.id) ? params.id[0] : params.id);
    }
  }, [params]);

  const [kit, setKit] = useState<IKit | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchKit = async () => {
        try {
          const res = await axios.get(`/api/kits/${id}`);
          setKit(res.data.data);
        } catch (err: any) {
          setError(err.response?.data?.message || 'Something went wrong');
        } finally {
          setLoading(false);
        }
      };

      fetchKit();
    }
  }, [id]);

  const handleAddToCart = (kit: IKit | null) => {
    if (!kit) return;
    dispatch(addToCart(kit));
    router.push('/shop'); // Redirect to cart page
  };

  const handleRating = (star: number) => {
    alert(`You rated this kit ${star} stars!`);
    console.log(star);
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="alert alert-danger text-center my-4">{error}</div>;
  if (!kit) return <div className="text-center py-5">Kit not found</div>;
// 
  return (
    <div className="container py-5">
      <div className="card shadow-lg">
        <div className="row g-0">
          <div className="col-md-5">
            <Image
              src={`/products/${kit.images[1]}`}
              alt={kit.name}
              width={500}
              height={500}
              className="img-fluid rounded-start w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title fw-bold">{kit.name}</h2>
              <p className="card-text text-muted">{kit.description}</p>
              <ul className="list-group list-group-flush my-3">
                <li className="list-group-item"><strong>Category:</strong> {kit.category}</li>
                <li className="list-group-item"><strong>Brand:</strong> {kit.brand}</li>
                <li className="list-group-item"><strong>Price:</strong> ${kit.price.toFixed(2)}</li>
                {kit.discount !== undefined && (
                  <li className="list-group-item"><strong>Discount:</strong> {kit.discount}%</li>
                )}
                <li className="list-group-item">
                  <strong>Ratings:</strong> {kit.ratingsAverage} ⭐ ({kit.ratingsQuantity} reviews)
                </li>
                <li className="list-group-item">
                  <strong>Created At:</strong> {new Date(kit.createdAt).toLocaleDateString()}
                </li>
                <li className="list-group-item">
                  <strong>Updated At:</strong> {new Date(kit.updatedAt).toLocaleDateString()}
                </li>
              </ul>

              {kit.images?.length > 1 && (
                <div>
                  <h5 className="mt-4 mb-2">More Images</h5>
                  <div className="row g-2">
                    {kit.images.slice(1).map((img, idx) => (
                      <div key={idx} className="col-4">
                        <Image
                          src={`/products/${img}`}
                          alt={`kit image ${idx + 1}`}
                          width={500}
                          height={500}
                          className="img-fluid rounded border"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4">
                <button className="btn btn-primary" onClick={() => handleAddToCart(kit)}>
                  Add to Cart
                </button>
              </div>

              <div className="mt-4">
                <h5>Rate this kit:</h5>
                <div className="d-flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${star <= kit.ratingsAverage ? 'filled' : ''}`}
                      onClick={() => handleRating(star)}
                      style={{
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: star <= kit.ratingsAverage ? '#ffc107' : '#e4e5e9',
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
