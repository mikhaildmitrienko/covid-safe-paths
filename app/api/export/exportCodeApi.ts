import type { HealthcareAuthority } from '../healthcareAuthorities/getHealthcareAuthoritiesApi';

const exportCodeApi = async (
  authority: HealthcareAuthority,
  code: number,
): Promise<{ valid: boolean }> => {
  const endpoint = `${authority.public_api}/access-code/valid`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ accessCode: code }),
  });
  const success = res.status === 200;
  if (!success) {
    throw res.status;
  }
  return await res.json();
};

export default exportCodeApi;
