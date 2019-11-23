# Connecting between bylink with client side

:fire: :fire: :fire:

## First

- You have to create file .env for set token connected with bylink.

```
# In file .env
TOKEN=${token}
```

## APIs

```
    - GET /api/bylink/bylinkGet?status=pinNumber
    - POST /api/bylink/bylinkPost
        - body { status : 0 or 1 , pin: pin number }
```

## Data Responded

```
    {
        response: string,
        status: number
    }
```
