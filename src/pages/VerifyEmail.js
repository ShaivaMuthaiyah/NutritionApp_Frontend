import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CognitoUser } from 'amazon-cognito-identity-js';
import userpool from '../userpool'; // Make sure this path is correct

export default function VerifyEmail() {
    
  const [confirmationCode, setConfirmationCode] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { username } = useParams();
  const navigate = useNavigate();

  const handleVerification = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const user = new CognitoUser({
      Username: username,
      Pool: userpool, // Ensure `userpool` is correctly imported here
    });

    user.confirmRegistration(confirmationCode, true, (err, result) => {
      setLoading(false);
      if (err) {
        console.error('Verification failed:', err);
        setError(err.message || 'Verification failed');
        return;
      }
      console.log('Verification successful:', result);
      setSuccess(true);
      navigate('/signin');
    });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Verify Your Email
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {success ? (
          <p className="text-center text-green-600">Your email has been verified successfully!</p>
        ) : (
          <form onSubmit={handleVerification} className="space-y-6">
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-900">
                Confirmation Code
              </label>
              <div className="mt-2">
                <input
                  id="code"
                  name="code"
                  type="text"
                  required
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? 'Verifying...' : 'Verify Email'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
