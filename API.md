## Base URL
`http://localhost:8000/api/`

## Error Responses

All end points may return these error responses:
```json
{
    "message":"Error message here"
}
```
Common error status codes:
- `200` - OK
- `404` - Not Found
- `500` - Internal Server Error

## Endpoints
### POST /api/upload_file
Uploads file.

**Form-data:**
```js
key: "key"
file: "file"
```

**Response:** 200 OK
```json
{
    "message":"Successfully uploaded files"
}
```

### GET /api/read_file?fileName="fileName"

**Response:** 200 OK
```json
{
    "data":"content of file"
}
```

### GET /api/count_word?fileName=files
**Response:** 200 OK

```json
{
    "data":{
        "val":"count"
    }
}
```