/**
 * 官网询盘 → DDDI Core POST /api/v1/contact/cityline38
 * 落库 contact_form_message（经 TableProxy 回源 YesApi，land_check 可见）。
 */

const ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_API ||
  `${(
    process.env.NEXT_PUBLIC_DDDI_API_BASE_URL ||
    process.env.NEXT_PUBLIC_DDDI_BACKEND_URL ||
    'https://api.dddi.com.au'
  ).replace(/\/+$/, '')}/api/v1/contact/cityline38`;

export type CitylineContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  suburb?: string;
  postcode?: string;
  message?: string;
  stayUpdated?: boolean;
  pageInfo?: string;
};

export async function submitContactFormMessage(
  payload: CitylineContactPayload
): Promise<{ received: boolean; record_id?: number }> {
  const firstName = payload.firstName.trim();
  const lastName = payload.lastName.trim();
  const fullname = `${firstName} ${lastName}`.trim();
  const email = payload.email.trim();
  const phone = payload.mobile.trim();
  const suburb = (payload.suburb ?? '').trim();
  const postcode = (payload.postcode ?? '').trim();
  const userMessage = (payload.message ?? '').trim();
  const pageInfo =
    payload.pageInfo ||
    (typeof window !== 'undefined' ? window.location.href : '');

  const message =
    userMessage ||
    [
      'Register interest — Cityline 38',
      suburb ? `Suburb: ${suburb}` : '',
      postcode ? `Postcode: ${postcode}` : '',
    ]
      .filter(Boolean)
      .join('\n');

  const body = {
    fullname,
    email,
    phone,
    message,
    subject: `Cityline 38 — Register interest: ${fullname}`,
    page_info: pageInfo,
    ext: {
      first_name: firstName,
      last_name: lastName,
      suburb: suburb || undefined,
      postcode: postcode || undefined,
      stay_updated: payload.stayUpdated ? 'yes' : 'no',
      form_type: 'register_interest',
    },
  };

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const json = (await res.json().catch(() => ({}))) as {
    data?: { received?: boolean; record_id?: number };
    error?: { message?: string };
    message?: string;
  };

  if (res.status !== 201 || !json?.data?.received) {
    throw new Error(
      json?.error?.message || json?.message || `Submit failed (${res.status})`
    );
  }

  return {
    received: true,
    record_id: json.data.record_id,
  };
}
