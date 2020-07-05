import React from 'react';

import Checkbox from '../../Checkbox';

const SubscriptionForm = ({ checked, onChange }) => (
    <div>
        <Checkbox
            htmlFor="WBB"
            labelName="Women's Basketball"
            type="checkbox"
            name="WBB"
            value={ checked }
            onChange={ onChange }
        />
    </div>
);

export default SubscriptionForm;
